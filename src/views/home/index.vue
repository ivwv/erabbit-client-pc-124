<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
      </div>
    </div>
  </div>
</template>
<script>
import HomeCategory from './components/home-category.vue'
export default {
  name: 'HomePage',
  components: { HomeCategory },
  setup() {},
}
</script>

<style lang="less" scoped></style>
