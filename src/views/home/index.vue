<template>
  <div class="home-entry">
    <div class="container">
      <!-- 左侧分类 -->
      <HomeCategory />
      <!-- 轮播图 -->
      <HomeBanner />
    </div>
  </div>
  <!-- 新鲜好物 -->
  <!-- 人气推荐 -->
  
</template>
<script>
import HomeCategory from './components/home-category.vue'
import HomeBanner from './components/home-banner.vue'

export default {
  name: 'HomePage',
  components: { HomeCategory, HomeBanner },
  setup() {},
}
</script>

<style lang="less" scoped></style>
