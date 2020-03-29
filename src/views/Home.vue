<template>
  <div class="home">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <van-tabbar route  v-model="active" >
      <van-tabbar-item replace to="/homeIndex" icon="home-o" >首页</van-tabbar-item>
      <van-tabbar-item replace to="/search" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item replace to="/serviceManagent" icon="newspaper-o">服务管理</van-tabbar-item>
      <van-tabbar-item replace to="/search" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {active:0};
  }
};
</script>
<style lang="scss" scoped>
.homeBanner {
  height: 4rem;
}
</style>
