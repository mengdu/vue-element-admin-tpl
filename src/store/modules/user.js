import { getLoginInfo, login } from '../../api/user'
import { SET_LOGIN } from '../types'

const state = {
  loginUser: null
}

const mutations = {
  [SET_LOGIN] (state, user) {
    state.loginUser = user
  }
}

const actions = {
  async login ({ commit }, payload) {
    const res = await login(payload.username, payload.password)
    return res
  },

  async getLoginInfo ({ commit }) {
    const user = await getLoginInfo()
    commit(SET_LOGIN, user)
    return user
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
