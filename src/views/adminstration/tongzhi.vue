<template>
  <div>
    <van-nav-bar title="通知管理" />
    <van-cell-group border="false">
      <div style="font-size:14px;text-align: left;font-weight: bold;
    padding: 10px 25px;">请选中通知类型</div>
      <van-radio-group
        v-model="fbtype"
        direction="horizontal"
        style="font-size:12px;padding:10px 25px"
      >
        <van-radio name="1">系统通知</van-radio>
        <van-radio name="2">打折通知</van-radio>
        <van-radio name="3">车展通知</van-radio>
      </van-radio-group>
      <van-field v-model="fbmain" type="textarea" label="通知内容" placeholder="请输入通知内容" />
    </van-cell-group>
    <van-button type="info" @click="ljts">发布通知</van-button>
  </div>
</template>
<script>
import Cookies from "js-cookie";
var moment = require("moment");
export default {
  data() {
    return {
      fbtype: 1,
      fbmain: "",
      username: "",
      time: ""
    };
  },
  methods: {
    ljts() {
      if (this.fbmain == "") {
        this.$toast("请输入发布内容");
        return false;
      }
      this.username = Cookies.get("userName");
      this.time = moment().format("YYYY-MM-DD");
      let args = {
        fbtype: this.fbtype, //订单号
        fbmain: this.fbmain, //发布内容
        fbtime: this.time, //投诉时间
        fbuser: this.username //投诉人
      };
      this.$axios
        .get("http://localhost:8088/api/tongzhi/createtongzhi", {
          params: args
        })
        .then(res => {
          alert("添加成功");
          this.$router.push("/serviceManagent");
        });
    }
  }
};
</script>
<style scoped>
</style>