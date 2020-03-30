<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <van-tabbar route v-show="showto"  v-model="active" >
      <van-tabbar-item replace to="/" icon="home-o" >首页</van-tabbar-item>
      <van-tabbar-item replace to="/shopcar" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item replace to="/serviceManagent" icon="newspaper-o">服务管理</van-tabbar-item>
      <van-tabbar-item replace to="/user" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {active:0,showto:true};
  },
  mounted() {
    console.log(this.$route.path);
    
    console.log(window.location.href);
    
    if(this.$route.path=='/login' || this.$route.path=='/regester'){
      this.showto = false

    }else{
      this.showto = true
    }
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
