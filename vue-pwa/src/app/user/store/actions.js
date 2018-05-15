import API from './api'

export const updateProfile = ({ dispatch, commit }, data) => {
  return API.updateProfile(data).then(data => {
    return Promise.resolve(data)
  })
}

export const fetchMe = ({ commit }) => {
  return API.me().then(data => {
    commit('SET_ME', data)
  }).catch(() => {
    commit('SET_ME', null)
  })
}

export const resetState = ({ dispatch, commit }) => {
}
