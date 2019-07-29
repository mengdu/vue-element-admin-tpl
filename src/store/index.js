import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1
}

const store = new Vuex.Store({
  strict: true,
  state
})

export default store
