import API from './api'
import localforage from 'localforage'

export const authorise = ({ dispatch, commit }, { email, password }) => {
  return API.authorise({ email, password }).then(data => {
    return dispatch('setAuthData', data)
  })
}

export const updatePassword = ({ dispatch, commit }, { newPassword, password }) => {
  return API.updatePassword({ newPassword, password }).then(data => {
    return Promise.resolve(data)
  })
}

export const updateEmail = ({ dispatch, commit }, { email, password }) => {
  return API.updateEmail({ email, password }).then(data => {
    return dispatch('init')
  })
}

export const resendEmailVerificationCode = ({ dispatch, commit }, { email }) => {
  return API.resendEmailVerificationCode({ email }).then(data => {
    return Promise.resolve(data)
  })
}

export const forgotPassword = ({ dispatch, commit }, { email }) => {
  return API.forgotPassword({ email }).then(data => {
    return Promise.resolve(data)
  })
}

export const signup = ({ dispatch, commit }, { username, email, password }) => {
  return API.signup({ username, email, password }).then(data => {
    return dispatch('setAuthData', data)
  })
}

export const refreshAuth = ({ state, dispatch, commit }) => {
  return API.refreshToken(state.refreshToken).then(data => {
    return dispatch('setAuthData', data)
  })
}

export const fetchMe = ({ commit }) => {
  return API.me().then(data => {
    commit('SET_ME', data)
  }).catch(() => {
    commit('SET_ME', null)
  })
}

export const clearAuth = ({ dispatch, commit }) => {
  return dispatch('setAuthData', { token: null, refreshToken: null }).then(() => {
    commit('SET_ME', null)
  })
}

export const setAuthData = ({ dispatch, commit }, data) => {
  return localforage.setItem('auth/token', data.token).then(() => {
    return localforage.setItem('auth/refreshToken', data.refreshToken).then(() => {
      commit('SET_TOKEN', data.token)
      commit('SET_REFRESH_TOKEN', data.refreshToken)
      if (data.token) {
        return dispatch('fetchMe')
      }
      return Promise.resolve(data)
    })
  })
}

export const init = ({ dispatch, commit }) => {
  return localforage.getItem('auth/token').then(token => {
    return localforage.getItem('auth/refreshToken').then(refreshToken => {
      commit('SET_TOKEN', token)
      commit('SET_REFRESH_TOKEN', refreshToken)
      if (token) {
        return dispatch('fetchMe')
      }
      return Promise.resolve(token)
    })
  })
}
