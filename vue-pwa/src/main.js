// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import localforage from 'localforage'
import router from './router'
import store from './store'
import bus from '@/bus'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

localforage.config({
  driver: localforage.LOCALSTORAGE,
  storeName: 'adonify'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  mounted () {
    bus.$emit('showWait', 'Please wait, Checking credentials...')
    store.dispatch('auth/init').then(() => {
      bus.$emit('authReady')
      bus.$emit('hideWait')
    })
  },
  components: { App },
  template: '<App/>'
})
