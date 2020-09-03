import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import { SET_WATERMARK } from './types'
import { isProd, isTest } from '../utils'

Vue.use(Vuex)

const state = {
  env: isProd()
    ? 'prd'
    : isTest() ? 'test' : 'dev',
  watermark: null
}

console.log(process.env)

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
