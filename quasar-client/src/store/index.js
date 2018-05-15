import Vue from 'vue'
import Vuex from 'vuex'

import example from './module-example'
import appStore from '@/app/store'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: Object.assign(
    appStore,
    example
  )
})

export default store
