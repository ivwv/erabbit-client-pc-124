<template>
  <!-- 顶部通栏 -->
  <AppNavBar></AppNavBar>
  <!-- 头部组件 -->
  <header>头部组件</header>
  <!-- 内容容器 -->
  <div class="main">
    <!-- 二级路由 -->
    <router-view></router-view>
  </div>
  <!-- 底部组件 -->
  <footer>底部组件</footer>
</template>
<script>
import AppNavBar from '@/components/app-navbar.vue'
export default {
  name: 'Layout',
  components: {
    AppNavBar,
  },
  setup() {},
}
</script>

<style lang="less" scoped></style>
