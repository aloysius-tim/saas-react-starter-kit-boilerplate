import Vue from 'vue'
import Vuex from 'vuex'

import root from './root'
import appStore from '@/app/store'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: Object.assign({
    ...appStore,
    root
  })
})

export default store
