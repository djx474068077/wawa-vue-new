import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import loading from './modules/loading'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    loading
  }
})

export default store
