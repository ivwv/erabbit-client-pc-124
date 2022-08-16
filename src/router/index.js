import { createRouter, createWebHashHistory } from 'vue-router'
// 路由懒加载
const Layout = () => import('@/views/Layout.vue')
const Home = () => import('@/views/home')
const TopCategory = () => import('@/views/category/index.vue')
const SubCategory = () => import('@/views/category/sub.vue')

const routes = [
  // 一级布局容器
  {
    path: '/',
    component: Layout,
    children: [
      { path: '/', component: Home },
      { path: '/category/:id', component: TopCategory },
      { path: '/category/sub/:id', component: SubCategory },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
