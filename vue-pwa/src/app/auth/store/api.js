import { axios } from '@/plugins/axios'
const api = {}

api.refreshToken = (token) => {
  return axios.get('auth/refresh/token').then(res => {
    return Promise.resolve(res.data)
  }).catch(err => {
    return Promise.reject(err)
  })
}

api.authorise = ({ email, password }) => {
  return axios.post('auth/authorise', { email, password }).then(res => {
    return Promise.resolve(res.data)
  }).catch(err => {
    return Promise.reject(err)
  })
}

api.updatePassword = ({ newPassword, password }) => {
  return axios.post('auth/update/password', { newPassword, password }).then(res => {
    return Promise.resolve(res.data)
  }).catch(err => {
    return Promise.reject(err)
  })
}

api.resendEmailVerificationCode = ({ email }) => {
  return axios.post('auth/resend/email/verification/code', { email }).then(res => {
    return Promise.resolve(res.data)
  }).catch(err => {
    return Promise.reject(err)
  })
}

api.updateEmail = ({ email, password }) => {
  return axios.post('auth/update/email', { email, password }).then(res => {
    return Promise.resolve(res.data)
  }).catch(err => {
    return Promise.reject(err)
  })
}

api.forgotPassword = ({ email }) => {
  return axios.post('auth/forgot/password', { email }).then(res => {
    return Promise.resolve(res.data)
  }).catch(err => {
    return Promise.reject(err)
  })
}

api.signup = ({ username, email, password }) => {
  return axios.post('auth/signup', { username, email, password }).then(res => {
    return Promise.resolve(res.data)
  }).catch(err => {
    return Promise.reject(err)
  })
}

api.me = () => {
  return axios.get('auth/me').then(res => {
    return Promise.resolve(res.data)
  }).catch(err => {
    return Promise.reject(err)
  })
}

export default api
