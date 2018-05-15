export const setAlert = ({ commit }, { type, message, icon = null, translate = false }) => {
  commit('SET_ALERT', { type: type, message: message, icon: icon, translate: translate })
  setTimeout(() => {
    commit('SET_ALERT', { type: null, message: null, icon: null, translate: false })
  }, 3000)
}

export const apiAlert = ({ dispatch }, status) => {
  if (!status.code) status.code = 200
  if (!status.message) return
  var type = 'info'
  if (status.code >= 200 && status.code <= 299) {
    type = 'success'
  } else if (status.code >= 400 && status.code <= 499) {
    type = 'error'
  } else if (status.code >= 500 && status.code <= 599) {
    type = 'error'
  } else {
    type = 'info'
  }
  dispatch('setAlert', { type: type, message: status.message })
}
