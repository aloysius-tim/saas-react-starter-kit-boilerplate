import { axios } from '@/plugins/axios'
const api = {}

api.updateProfile = (data) => {
  return axios.post('profile/update', data).then(res => {
    return Promise.resolve(res.data)
  }).catch(err => {
    return Promise.reject(err)
  })
}

api.updateAvatar = ({ newPassword, password }) => {
  return axios.post('profile/update/avatar').then(res => {
    return Promise.resolve(res.data)
  }).catch(err => {
    return Promise.reject(err)
  })
}

api.me = () => {
  return axios.get('profile').then(res => {
    return Promise.resolve(res.data)
  }).catch(err => {
    return Promise.reject(err)
  })
}

export default api
