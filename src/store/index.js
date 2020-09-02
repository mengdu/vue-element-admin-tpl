import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import { SET_WATERMARK } from './types'

Vue.use(Vuex)

const state = {
  count: 1,
  watermark: null
}

const mutations = {
  [SET_WATERMARK] (state, img) {
    state.watermark = img
  }
}

const actions = {
  setWatermark ({ commit }, img) {
    commit(SET_WATERMARK, img)
  }
}

const store = new Vuex.Store({
  strict: true,
  state,
  actions,
  mutations,
  modules
})

export default store
