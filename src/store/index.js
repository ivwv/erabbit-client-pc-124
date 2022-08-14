import { createStore } from 'vuex'

export default createStore({
  state: {
    username: 'zs'
  },
  getters: {
    newName (state) {
      return state.username + '!!!'
    }
  },
  mutations: {},
  actions: {},
  modules: {}

})
