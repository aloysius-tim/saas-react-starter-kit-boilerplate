'use strict';

const uuid = use('uuid/v1');
const fs = use('fs');
const Helpers = use('Helpers');
const avatarDir = `${Helpers.publicPath('images/avatars/')}/`;
const logger = use('App/Helpers/Logger');
const cloudinary = use('cloudinary');

class ProfileController {
  // upload cloudinary
  async updateAvatar ({ request, response, auth }) {
    const user = await auth.getUser();
    const avatar = request.file('avatar', {
      types: ['image'],
      size: '3mb'
    });

    if (!avatar || !avatar.tmpPath || !avatar.clientName) {
      return response.status(400).json({ message: 'Please choose a file to upload.' });
    }

    const publicId = `avatar-${user.id}`;
    const updConfig = {
      public_id: publicId,
      folder: 'avatars',
      overwrite: true,
      width: 400,
      height: 400
    };
    const { findFace } = request.all();
    if (findFace) {
      updConfig.crop = 'thumb';
      updConfig.gravity = 'face';
    }

    // eslint-disable-next-line max-len,no-shadow
    const result = await cloudinary.v2.uploader.upload(avatar.tmpPath, updConfig, (error, result) => Promise.resolve(result)).catch(err => {
      console.log(err);
      return Promise.reject(err);
    });

    let profile = await user.profile().fetch();

    profile.avatar = `${result.secure_url}?${uuid()}`;
    await profile.save();

    // fetch again to get generated full avatar URL
    profile = await user.profile().fetch();
    await logger('info', 'Avatar Updated', user.id, null, user.email);

    return response.status(200).json({ message: 'Avatar updated.', url: profile.avatar, userId: user.id });
  }

  // upload image locally
  async updateAvatarLocal ({ request, response, auth }) {
    const user = await auth.getUser();
    const avatar = request.file('avatar', {
      types: ['image'],
      size: '3mb'
    });

    if (!avatar || !avatar.tmpPath || !avatar.clientName) {
      return response.status(400).json({ message: 'Please choose a file to upload.' });
    }

    const fileName = `avatar-${user.id}.${avatar.subtype}`;
    if (fs.existsSync(avatarDir + fileName)) {
      // eslint-disable-next-line consistent-return
      fs.unlink(avatarDir + fileName, err => {
        if (err) {
          return response.status(500).json({ message: 'Could not delete existing file.', errors: err });
        }
      });
    }

    await avatar.move(avatarDir, { name: fileName });

    if (!avatar.moved()) {
      return response.status(500).json({
        message: (avatar.error().message) ? avatar.error().message : 'Upload failed.',
        error: avatar.error()
      });
    }

    let profile = await user.profile().fetch();
    profile.avatar = `/images/avatars/${fileName}?${uuid()}`;
    await profile.save();
    // fetch again to get generated full avatar URL
    profile = await user.profile().fetch();
    await logger('info', 'Avatar Updated', user.id, null, user.email);

    return response.status(200).json({ message: 'Avatar updated.', url: profile.avatar, userId: user.id });
  }

  async me ({ response, auth }) {
    const user = await auth.getUser();
    const profile = await user.profile().first();
    if (!profile) {
      return response.status(404).json({ message: 'User doen\'t have any profile.' });
    }
    return response.status(200).json({ ...user.toJSON(), profile });
  }

  async update ({ request, response, auth }) {
    // eslint-disable-next-line camelcase
    const { first_name, last_name } = request.all();
    const user = await auth.getUser();
    const profile = await user.profile().first();

    if (!profile) {
      return response.status(404).json({ message: 'User doen\'t have any profile.' });
    }

    // eslint-disable-next-line camelcase,camelcase
    profile.first_name = first_name;
    // eslint-disable-next-line camelcase,camelcase
    profile.last_name = last_name;
    await profile.save();
    await logger('info', 'Profile Updated', user.id, null, profile);

    return response.status(200).json({ message: 'Profile updated' });
  }
}

module.exports = ProfileController;
