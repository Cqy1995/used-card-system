<template>
  <div>
    <van-nav-bar title="投诉建议" />
    <van-cell-group>
      <van-field v-model="ddNumber" label="订单号" placeholder="请输入订单号" />
      <van-field v-model="ddtextarea" type="textarea" label="投诉内容" placeholder="请输入投诉内容" />
    </van-cell-group>
    <van-button type="info" @click="ljts">立即投诉</van-button>
  </div>
</template>
<script>
import Cookies from "js-cookie";
var moment = require("moment");
export default {
  data() {
    return {
      ddNumber: "",
      ddtextarea: "",
      username: "",
      time: ""
    };
  },
  methods: {
    ljts() {
      if (this.ddNumber == "") {
        this.$toast("请输入订单号");
        return false;
      }
      if (this.ddtextarea == "") {
        this.$toast("请输入投诉内容");
        return false;
      }
      this.username = Cookies.get("userName");
      this.time = moment().format("YYYY-MM-DD");
      let args = {
        danhao: this.ddNumber, //订单号
        tscontent: this.ddtextarea, //投诉内容
        tstime: this.time, //投诉时间
        user: this.username //投诉人
      };
      console.log(args);
      this.$axios
        .get("http://localhost:8088/api/tousu/createtousu", {
          params: args
        })
        .then(res => {
          alert("添加成功");
          this.$router.push('/serviceManagent')
        });
    }
  }
};
</script>
<style scoped>
.van-field--min-height .van-field__control {
  min-height: 160px;
  line-height: 10px;
  border: 1px solid #ccc;
}
</style>