<template>
  <!-- 顶部通栏 -->
  <AppNavBar></AppNavBar>
  <!-- 头部组件 -->
  <AppHeader></AppHeader>
  <!-- 吸顶头部 -->
  <AppHeaderSticky />
  <!-- 内容容器 -->
  <main class="app-body">
    <!-- 二级路由 -->
    <router-view></router-view>
  </main>
  <!-- 底部组件 -->
  <AppFooter></AppFooter>
</template>
<script>
import AppNavBar from '@/components/app-navbar.vue'
import AppHeader from '@/components/app-header.vue'
import AppFooter from '@/components/app-footer.vue'
import AppHeaderSticky from '@/components/app-header-sticky'
import { useStore } from 'vuex'
export default {
  name: 'Layout',
  components: {
    AppNavBar,
    AppHeader,
    AppFooter,
    AppHeaderSticky,
  },
  // 获取下分类数据
  setup() {
    const store = useStore()
    store.dispatch('category/getList')
  },
}
</script>

<style lang="less" scoped>
.app-body {
  min-height: 600px;
}
</style>
