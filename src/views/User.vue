<template>
  <div class="user">
    <van-nav-bar title="个人中心" />
    <van-grid center class="userTop" :border="false">
      <van-grid-item
        icon="http://img5.imgtn.bdimg.com/it/u=4218530414,2263115521&fm=26&gp=0.jpg"
        :text="actName"
      />
    </van-grid>
    <van-cell-group class="userList" v-show="userorGl==true">
      <van-cell title="预约详情" :to="{ name: 'userlist', params: { id: 'a' }}" value="&gt;" />
      <van-cell title="订单详情" :to="{ name: 'userlist', params: { id: 'b' }}" value="&gt;" />
      <van-cell title="保险详情" :to="{ name: 'userlist', params: { id: 'c' }}" value="&gt;" />
      <van-cell title="服务详情" :to="{ name: 'userlist', params: { id: 'd' }}" value="&gt;" />
      <van-cell title="通知详情" :to="{ name: 'userlist', params: { id: 'e' }}" value="&gt;" />
      <van-cell title="砍价详情" :to="{ name: 'userlist', params: { id: 'f' }}" value="&gt;" />
      <van-cell title="修改个人信息" to="/edituser" value="&gt;" />
    </van-cell-group>
    <van-cell-group class="userList" v-show="userorGl==false">
      <van-cell title="预约管理" :to="{ name: 'userlist', params: { id: 'h' }}" value="&gt;" />
      <van-cell title="投诉管理" :to="{ name: 'userlist', params: { id: 'i' }}" value="&gt;" />
      <van-cell title="禁用管理" :to="{ name: 'userlist', params: { id: 'g' }}" value="&gt;" />
      <van-cell title="砍价管理" :to="{ name: 'userlist', params: { id: 'k' }}" value="&gt;" />
      <van-cell title="保险分类管理" :to="{ name: 'adminInsuranceClass'}" value="&gt;" />
      <van-cell title="用户管理" to="/usermsg" value="&gt;" />
    </van-cell-group>
    <van-button class="cardBtn" type="default" size="normal" @click="ToLgoin">退出登录</van-button>
  </div>
</template>

<script>
import Cookies from "js-cookie";
export default {
  data() {
    return {
      actName: "小楼一夜听春雨",
      userorGl: true
    };
  },
  mounted() {
    console.log(Cookies.get("userId"));
    console.log(Cookies.get("userName"));
    if (Cookies.get("userName") == "" || Cookies.get("userName") == undefined) {
      this.actName = "小楼一夜听春雨";
    } else {
      this.actName = Cookies.get("userName");
    }
    if (Cookies.get("userId") == "3") {
      this.userorGl = false;
    } else {
      this.userorGl = true;
    }
  },
  methods: {
    ToLgoin() {
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="scss" scoped>
.userTop {
  display: block;
  margin: 0 auto;
  padding: 0.3rem;
}
.userList {
  text-align: left;
}
</style>
<style lang="scss">
.user .van-grid-item__icon {
  font-size: 100px;
}
</style>