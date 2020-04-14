<template>
  <div class="yysq">
    <van-nav-bar title="预约申请" @click-left="onClickLeft" left-arrow />
    <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名" />
    <van-field v-model="userphone" name="电话号码" label="电话号码" placeholder="电话号码" />
    <van-field
      readonly
      clickable
      name="calendar"
      :value="value"
      label="预约时间"
      placeholder="点击选择日期"
      @click="showCalendar = true"
    />
    <van-calendar v-model="showCalendar" @confirm="onConfirm" />
    <van-field
      readonly
      clickable
      name="calendar"
      :value="value1"
      label="申请时间"
      placeholder="点击选择日期"
      @click="showCalendar1 = true"
    />
    <van-calendar v-model="showCalendar1" @confirm="onConfirm1" />
    <van-button type="default" class="subSq" @click="Toyy">立即预约</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      yy: "",
      username: "",
      value: "",
      showCalendar: false,
      value1: "",
      showCalendar1: false,
      userphone: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/home");
    },
    onConfirm(date) {
      this.value = `${date.getFullYear() + 1}/${date.getMonth() + 1}/${date.getDate()}`;
      this.showCalendar = false;
    },
    onConfirm1(date) {
      this.value1 = `${date.getFullYear() + 1}/${date.getMonth() + 1}/${date.getDate()}`;
      this.showCalendar1 = false;
    },
    Toyy() {
      if (
        this.username == ""||
        this.value == ""||
        this.value1 == ""||
        this.userphone == ""
        ) {
        this.$toast("请填入信息");
      } else {
        // this.$router.push("/home");
        this.$axios
          .get("http://localhost:8088/api/yylist/createYy",{
            params: {
              username: this.username,
              phone: this.userphone,
              yytime: this.value,
              sqtime: this.value1
            }
          }).then(res => {
            this.$toast("预约添加成功");
            this.$router.push("/home");
          })
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.yysq {
  overflow: hidden;
  textarea {
    display: block;
    width: 6rem;
    height: 3rem;
    border: 1px solid gray;
    margin: 1rem auto;
    margin-bottom: 0.5rem;
    font-size: 14px;
  }
  .subSq {
    width: 3rem;
  }
}
</style>