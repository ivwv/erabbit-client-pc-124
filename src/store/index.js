import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import cart from "./modules/cart";
import user from "./modules/user";
import category from "./modules/category";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    cart,
    user,
    category,
  },
  // 配置插件，可以配置多个
  plugins: [
    // 默认存储在localStorage中，可以配置存储在sessionStorage中
    createPersistedState({
      // 本地存储的名字
      key: "erabbit-client-pc-124-store",
      // 指定需要存储的模块
      paths: ["user", "cart"],
    }),
  ],
});
