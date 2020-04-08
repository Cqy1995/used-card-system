<template>
<div class="login">
    <van-nav-bar title="登录" />
    <van-cell-group class="cardGroups">
      <van-field
        :value="account"
        v-model="account"
        label="用户名:"
        icon="question-o"
        placeholder="请输入用户名"
        bind:click-icon="onClickIcon"
      />
      <van-field :value="pass" v-model="pass" type="password" label="密码:" placeholder="请输入密码" />
    </van-cell-group>
    <van-button class="cardBtn" type="default" size="normal" @click="login">登陆</van-button>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
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
      let params = {
            account: this.account,
            password: this.pass
          };
      this.$axios
          .get("http://localhost:8088/api/login/getAccount",{
            params: {
              account: this.account,
              password: this.pass
            }
          }).then(res => {
            console.log(res.data);
            console.log(res);
            if(res.data=="") {
              this.$toast('请输入正确的用户名');
            }else
            if(
              res.data.nickname !==this.account||
              res.data.password !==this.pass
            ) {
              this.$toast('请输入正确的用户名或密码');
            }else{
              this.$toast('登录成功');
              Cookies.set("userId", res.data.id)
              Cookies.set("userName", res.data.nickname)
              this.$router.push("/")
            }
            
          })
          .catch(error => {
           console.log(error);
    })
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
