<template>
  <div>
    <van-nav-bar title="投诉建议" />
    <van-cell-group>
      <van-field v-model="ddNumber" label="订单号" readonly />
      <van-field v-model="ddName" label="订单名" readonly />
      <van-field v-model="ddtextarea" type="textarea" label="投诉内容" />
    </van-cell-group>
    <van-button type="info" @click="ljts">立即投诉</van-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ddNumber: 109208266182,
      ddName: "雷克萨斯500",
      ddtextarea: ""
    };
  },
  methods: {
    ljts() {
      Dialog.alert({
        title: "标题",
        message: "弹窗内容"
      }).then(() => {
        // on close
        console.log("弹窗内容sssss",this)
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