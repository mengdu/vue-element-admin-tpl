import Vue from 'vue'

const state = {
  postList: [],
  isLoadPostList: false
}

const actions = {
  async getPostList ({commit}, params) {
    commit('SET_LOAD_POST_LIST', true)
    var res = await Vue.http.get('https://cnodejs.org/api/v1/topics', {params})
    // console.log(res.data)
    commit('SET_POST_LIST', res.data)
    commit('SET_LOAD_POST_LIST', false)
  },
  async nextPost ({commit}, params) {
    var res = await Vue.http.get('https://cnodejs.org/api/v1/topics', {
      params
    })
    if (res.data) {
      commit('SET_PUSH_POST', res.data)
    }
    return true
  }
}

const mutations = {
  SET_POST_LIST (state, list) {
    state.postList = list
  },
  SET_LOAD_POST_LIST (state, isLoad) {
    state.isLoadPostList = isLoad
  },
  SET_PUSH_POST (state, list) {
    list.forEach(post => {
      state.postList.push(post)
    })
  }
}

export default {
  state,
  actions,
  mutations
}
