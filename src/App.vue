<template>
  <div id="app">
    <router-view></router-view>
    <van-tabbar route v-show="showto" v-model="active" active-color="rgb(216, 30, 6)">
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/shopcar" icon="shopping-cart-o" v-show="showCar">购物车</van-tabbar-item>
      <van-tabbar-item replace to="/newcarlist" icon="shopping-cart-o" v-show="showCar">车辆列表</van-tabbar-item>
      <van-tabbar-item replace to="/serviceManagent" icon="newspaper-o" v-show="showCar==false">服务管理</van-tabbar-item>
      <van-tabbar-item replace to="/user" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return { active: 0, showto: true, showCar: true };
  },
  mounted() {
    function getCaption(obj) {
      var index = obj.lastIndexOf("#/");
      obj = obj.substring(index + 1, obj.length);
      //  console.log(obj);
      return obj;
    }
    var str = " 执法办案流程-立案审批";
    var abc = getCaption(window.location.href);
    if (abc == "/login" || abc == "/") {
      this.showto = false;
    } else {
      this.showto = true;
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
