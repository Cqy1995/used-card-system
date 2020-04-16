<template>
  <div>
    <van-nav-bar title="服务管理" />
    <van-grid column-num="2">
      <van-grid-item icon="umbrella-circle" text="保险管理" to="/adminstration/insuranceClass" />
      <van-grid-item icon="service" text="投诉管理" to="/adminstration/tousu" />
      <van-grid-item icon="volume" text="通知管理" to="/adminstration/tongzhi" />
       <van-grid-item icon="column" text="砍价" to="/adminstration/kanjia" />
    </van-grid>
  </div>
</template>
<script>
import Cookies from 'js-cookie'
export default {
  data(){
    return{
      userId:1,//用户id
    }
  },
  mounted(){
    this.userId = Cookies.get('userId')
   
  }
}
</script>
<style>
.van-nav-bar {
  background: rgb(216, 30, 6);
}
.van-nav-bar .van-nav-bar__title {
  color: #fff !important;
}
</style>