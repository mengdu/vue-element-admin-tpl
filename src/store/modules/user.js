import { login } from '../../api/user'
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
  async login (payload) {
    const res = await login(payload.username, payload.password)

    // save to store
    localStorage.setItem('user', JSON.stringify(res.data))
    return res
  },

  async getLoginInfo ({ commit }) {
    // get user from backend
    // const user = await getLoginInfo()
    // get user from store
    const user = JSON.parse(localStorage.getItem('user') || 'null')
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
