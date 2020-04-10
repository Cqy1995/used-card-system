<template>
  <div>
    <van-nav-bar title="修改个人信息" @click-left="onClickLeft" left-arrow />
    <van-cell-group class="editBox">
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
    <van-button class="cardBtn" type="default" size="normal" @click="editUser">修改</van-button>
  </div>
</template>

<script>
import Cookies from "js-cookie";
export default {
  data() {
    return {
      account: "",
      pass: ""
    };
  },
  mounted() {
      this.account = Cookies.get("userName")
  },
  methods: {
      onClickLeft() {
      this.$router.push("/user");
    },
      editUser() {
          let params = {
            account: this.account,
            password: this.pass
          };
          this.$axios
          .get("http://localhost:8088/api/login/updateAccount",{
            params: {
              account: this.account,
              password: this.pass
            }
          }).then(res => {
            this.$toast('修改成功');
            this.$router.push("/user")

          })
      }
  }
};
</script>

<style>
.editBox{
    margin-top: 1rem;
}
</style>