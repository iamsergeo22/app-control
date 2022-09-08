import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    user: {
      name: ''
    }
  },

  getters: {
    user(state) {
      return state.user
    }
  },

  actions: {
    user(context, data) {
      context.commit('user', data)
    }
  },

  mutations: {
    user(state, data) {
      state.user = data
    }
  }
})