import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'

Vue.use(Vuex)

const state = {
  count: 1
}

const store = new Vuex.Store({
  strict: true,
  state,
  modules
})

export default store
