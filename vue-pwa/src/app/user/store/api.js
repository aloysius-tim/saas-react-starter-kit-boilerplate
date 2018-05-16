import { axios } from '@/plugins/axios'
const api = {}

api.updateProfile = (data) => {
  return axios.post('profile/update', data).then(res => {
    return Promise.resolve(res.data)
  }).catch(err => {
    return Promise.reject(err)
  })
}

api.updateAvatar = (formData) => {
  return axios.post('profile/update/avatar', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).then(res => {
    return Promise.resolve(res.data)
  }).catch(err => {
    return Promise.reject(err)
  })
}

export default api
