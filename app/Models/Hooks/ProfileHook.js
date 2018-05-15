'use strict'

const gravatar = use('gravatar');
const axios = use('axios')
const Env = use('Env')
const User = use('App/Models/User')

const ProfileHook = module.exports = {}

ProfileHook.setAvatar = async (profileInstance) => {
  if(!profileInstance.avatar || profileInstance.avatar == "") {
    profileInstance.avatar = profileInstance.remote_avatar
  } else {
    profileInstance.avatar = Env.get("APP_URL", "") + profileInstance.avatar
  }
}

ProfileHook.setAvatars = async (profileArray) => {
  profileArray.map(profileInstance => {
    if(!profileInstance.avatar || profileInstance.avatar == "") {
      profileInstance.avatar = profileInstance.remote_avatar
    } else {
      profileInstance.avatar = Env.get("APP_URL", "") + profileInstance.avatar
    }
  })
}

ProfileHook.setDefaults = async (profileInstance) => {
  const user = await User.find(profileInstance.user_id)
  const avatarUrl = await axios.get('http://picasaweb.google.com/data/entry/api/user/' + user.email + '?alt=json').then((res) => {
    if(res && res.data && res.data.entry && res.data.entry.gphoto$thumbnail && res.data.entry.gphoto$thumbnail.$t) {
      return Promise.resolve(res.data.entry.gphoto$thumbnail.$t)
    } else {
      return Promise.resolve(gravatar.url(user.email, {s: '100', r: 'x', d: 'retro'}, true))
    }
  }).catch(() => {
      return Promise.resolve(gravatar.url(user.email, {s: '100', r: 'x', d: 'retro'}, true))
  })
  profileInstance.remote_avatar = avatarUrl
}
