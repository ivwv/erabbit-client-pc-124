// 分类模块
import { topCategory } from '@/api/constants'
import { findAllCategory } from '@/api/category'
export default {
  // 名明明空间
  namespaced: true,
  state() {
    return {
      // 分类信息集合，依赖 topCategory重新设置，保证初始化就要数据，不至于白屏
      list: topCategory.map((item) => ({ name: item })),
    }
  },
  // 修改分类函数
  mutations: {
    setList(state, payload) {
      state.list = payload
    },
    // 定义show和hide函数 控制当前分类的二级分类显示和隐藏
    // 修改当前一级分类下的open数据为true
    show(state, id) {
      const currCategory = state.list.find((item) => item.id === id)
      currCategory.open = true
    },
    // 修改当前一级分类下的open数据为false
    hide(state, id) {
      const currCategory = state.list.find((item) => item.id === id)
      currCategory.open = false
    },
  },
  // 获取分类函数
  actions: {
    async getList({ commit }) {
      // 获取分类数据
      const data = await findAllCategory()
      // 给每一个分类加上控制二级分类显示隐藏的数据
      data.result.forEach((top) => {
        top.open = false
      })
      // 修改分类数据
      commit('setList', data.result)
    },
  },
}
