import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import beforeEach from './beforeEach'

Vue.use(VueRouter)

const Router = new VueRouter({
  /*
   * NOTE! Change Vue Router mode from quasar.conf.js -> build -> vueRouterMode
   *
   * If you decide to go with "history" mode, please also set "build.publicPath"
   * to something other than an empty string.
   * Example: '/' instead of ''
   */

  // Leave as is and change from quasar.conf.js instead!
  mode: process.env.VUE_ROUTER_MODE,
  base: process.env.VUE_ROUTER_BASE,
  scrollBehavior: () => ({ y: 0 }),
  routes
})

Router.beforeEach(beforeEach)

// import firebase from '../plugins/firebase'
// Router.beforeEach((to, from, next) => {
//   let currentUser = firebase.auth().currentUser
//   let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
//   let onlyGuest = to.matched.some(record => record.meta.guest)
//   if (onlyGuest) {
//     if (currentUser) next(from)
//     return
//   }
//   if (requiresAuth && !currentUser) next({ name: 'login' })
//   else if (!requiresAuth && currentUser) next()
//   else next()
// })

export default Router
