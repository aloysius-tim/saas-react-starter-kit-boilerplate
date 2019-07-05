'use strict'

const uuid = use('uuid/v1')
const Mail = use('Mail')
const fs = use('fs')
const Helpers = use('Helpers')
const avatarDir = Helpers.publicPath('images/avatars/') + '/'
const logger = use('App/Helpers/Logger')
const Profile = use('App/Models/Profile')
const cloudinary = use ('cloudinary')

class UserController {

  async userOnboarded({ request, response, auth }) {
    const user = await auth.getUser();
    user.onboarded = true;
    await user.save();

    return response.status(200).json(user);

  }
}

module.exports = UserController;
