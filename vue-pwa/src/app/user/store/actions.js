import API from './api'
import bus from '@/bus'
// import { apiNotify } from '@/plugins/helpers'
export const updateProfile = ({ dispatch, commit }, data) => {
  return API.updateProfile(data).then(data => {
    return Promise.resolve(data)
  })
}

export const profileUpdateAvatar = ({ dispatch }, { imagefile }) => {
  bus.$emit('showWait', 'Uploading avatar...')
  var formData = new FormData()
  formData.append('avatar', imagefile.files[0])
  return API.updateAvatar(formData).then(data => {
    bus.$emit('hideWait')
    dispatch('auth/fetchMe', null, { root: true })
    return Promise.resolve(data)
  }).catch(err => {
    bus.$emit('hideWait')
    return Promise.reject(err)
  })
}

export const resetState = ({ dispatch, commit }) => {
}
