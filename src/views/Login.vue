<template>
<div class="login">
    <van-nav-bar title="登录" />
    <van-cell-group class="cardGroups">
      <van-field
        :value="account"
        label="用户名:"
        icon="question-o"
        placeholder="请输入用户名"
        bind:click-icon="onClickIcon"
      />
      <van-field :value="pass" type="password" label="密码:" placeholder="请输入密码" />
    </van-cell-group>
    <van-button class="cardBtn" type="default" size="normal" @click="login">登陆</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: "",
      pass: ""
    };
  },
  methods: {
    login() {
      // 获取已有账号密码
      this.$axios
          .get("http://localhost:8080/api.js").then(res => {
            
          })
      // this.$http
      //   .get("/api/login/getAccount")
      //   .then(response => {
      //     // 响应成功回调
      //     console.log(response);
      //     let params = {
      //       account: this.account,
      //       password: this.pass
      //     };
      //     // 创建一个账号密码
      //     return this.$http.post("/api/login/createAccount", params);
      //   })
      //   .then(response => {
      //     console.log(response);
      //   })
      //   .catch(reject => {
      //     console.log(reject);
      //   });
    }
  }
};
</script>
<style lang="scss" scoped>
.cardGroups {
  margin-top: 1rem;
}
.cardBtn {
  width: 5rem;
  margin-top: 0.5rem;
}
</style>
