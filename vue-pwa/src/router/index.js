import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import beforeEach from './beforeEach'

Vue.use(VueRouter)

const Router = new VueRouter({
  // needs to be history mode for bootstrap to work with vuetify
  mode: 'history',
  base: '/app/',
  scrollBehavior: () => ({ y: 0 }),
  routes
})

Router.beforeEach(beforeEach)

export default Router
