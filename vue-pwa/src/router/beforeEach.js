import store from '../store'
import localforage from 'localforage'

const beforeEach = (to, from, next) => {
  // redirect back if route does not exists
  if (!to.matched.length) {
    next({ path: from.path })
    return
  }
  if (to.meta && to.meta.guest) {
    if (!store.getters['auth/isAuthorised']) {
      return next()
    } else {
      return next({ path: from.path })
    }
  } else {
    if (to.meta && to.meta.requiresAuth) {
      if (store.getters['auth/isAuthorised']) {
        localforage.setItem('intended', null)
        return next()
      } else {
        localforage.setItem('intended', to)
        return next({ name: 'login' })
      }
    } else {
      return next()
    }
  }
}

export default beforeEach
