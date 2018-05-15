// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import localforage from 'localforage'
import BootstrapVue from 'bootstrap-vue'
import router from './router'
import store from './store'
import bus from './bus'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

localforage.config({
  driver: localforage.LOCALSTORAGE,
  storeName: 'adonisjwt'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    this.$store.dispatch('auth/initAuth').then(() => {
      bus.$emit('authSync', this.$store.getters['auth/isAuthorised'])
      // do something
    })
  }
})
