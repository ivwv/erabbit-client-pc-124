import { createRouter, createWebHashHistory } from 'vue-router'
// 路由懒加载
const Layout = () => import('@/views/Layout.vue')
const Home = () => import('@/views/home')

const routes = [
  // 一级布局容器
  {
    path: '/',
    component: Layout,
    children: [{ path: '/', component: Home }],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
