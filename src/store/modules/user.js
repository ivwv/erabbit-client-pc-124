// 用户模块

export default {
  // 名明明空间
  namespaced: true,
  state() {
    return {
      // 用户信息
      profile: {
        id: '',
        avatar: '',
        nickname: '',
        account: '',
        mobile: '',
        token: '',
      },
    }
  },
  mutations: {
    setUser(state, payload) {
      state.profile = payload
    },
  },
}
