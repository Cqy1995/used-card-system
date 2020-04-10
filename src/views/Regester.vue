<template>
  <div class="regester">
    <van-nav-bar title="注册" @click-left="onClickLeft" left-arrow />
    <van-cell-group class="cardGroups">
      <van-field
        :value="username"
        v-model="username"
        label="用户名:"
        icon="question-o"
        placeholder="请输入用户名"
        bind:click-icon="onClickIcon"
      />
      <van-field
        :value="password"
        v-model="password"
        type="password"
        label="密码:"
        placeholder="请输入密码"
      />
      <van-field
        :value="password1"
        v-model="password1"
        type="password"
        label="确认密码:"
        placeholder="请确认密码"
      />
    </van-cell-group>
    <van-button class="cardBtn" type="default" @click="regest" size="normal">注册</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      password1: ""
    };
  },
  methods: {
    onChange(event) {
      // event.detail 为当前输入的值
      console.log(event.detail);
    },
    onClickLeft() {
      this.$router.push("/login");
    },
    regest() {
      if (this.username == "" || this.password == "") {
        this.$toast("请输入完整信息");
      } else {
        let params = {
          account: this.username,
          password: this.password
        };
        this.$axios
          .get("http://localhost:8088/api/login/createAccount", {
            params: {
              account: this.username,
              password: this.password
            }
          })
          .then(res => {
            console.log(res);
            this.$router.push("/login");
          });
      }
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