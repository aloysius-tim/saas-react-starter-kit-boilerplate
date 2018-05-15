export default [
  ...require('./auth/routes').default,
  ...require('./user/routes').default
]
