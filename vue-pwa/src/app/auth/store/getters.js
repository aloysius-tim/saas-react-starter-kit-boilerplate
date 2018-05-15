export const isAuthorised = state => {
  return state.token !== null
}
export const getToken = (state) => {
  return state.token
}

export const getMe = (state) => {
  return state.me
}
