export const isAuthorised = state => {
  return state.token !== null
}
export const getToken = (state) => {
  return state.token
}
export const getRefreshToken = (state) => {
  return state.refreshToken
}
