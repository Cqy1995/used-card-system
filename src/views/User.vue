<template>
  <div>
    <van-nav-bar title="个人中心" />
    <van-grid center class="userTop" :border="false">
      <van-grid-item icon="https://b.yzcdn.cn/vant/icon-demo-1126.png" :text="actName" />
    </van-grid>
    <van-cell-group class="userList">
      <van-cell title="预约管理" value="&gt;"/>
      <van-cell title="订单管理" value="&gt;" />
      <van-cell title="保险管理" value="&gt;" />
      <van-cell title="服务管理" value="&gt;" />
      <van-cell title="通知管理" value="&gt;" />
      <van-cell title="砍价管理" value="&gt;" />
    </van-cell-group>
    <van-button class="cardBtn" type="default" size="normal">退出登录</van-button>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  data() {
    return{
    actName: ""

    }
  },
  mounted() {
    console.log(Cookies.get("userId"));
    console.log(Cookies.get("userName"));
    actName: "123"
    this.actName = Cookies.get("userName")
    
  }
};
</script>

<style lang="scss" scoped>
.userTop {
  display: block;
  margin: 0 auto;
  padding: 0.8rem;
}
.userList{
  text-align: left;
}
</style>