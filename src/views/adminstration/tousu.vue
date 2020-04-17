<template>
  <div>
    <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">投诉列表</van-divider>
    <!-- <div v-for="item in tousuList" :key="item._id" class="liststyle">
      <div>投诉单号:{{item.danhao}}</div>
      <div>投诉内容:{{item.tscontent}}</div>
      <div>投诉人:{{item.user}}</div>
      <div>投诉时间:{{item.tstime}}</div>
    </div>-->
    <van-cell v-for="item in tousuList" :key="item._id">
      <!-- 使用 right-icon 插槽来自定义右侧图标 -->
      <template #title>
        <span class="custom-title">{{item.danhao}}</span>
        <van-tag type="danger">单号</van-tag>
      </template>
      <template #label>
        <div>{{item.tscontent}}</div>
        <div>投诉人:{{item.user}}&nbsp;&nbsp;&nbsp;&nbsp;投诉时间:{{item.tstime}}</div>
        <div class="tousuBox">
          <van-button type="primary" @click="Toagree">同意</van-button>
          <van-button type="info" @click="Tojj">拒绝</van-button>
          <van-button type="info" @click="Todel">删除</van-button>
          <van-button type="danger" @click="Tohf">回复</van-button>
        </div>
      </template>
    </van-cell>
    <van-dialog v-model="show" title="标题" show-cancel-button :showConfirmButton="showbtn">
      <van-field v-model="username" name="回复" label="回复" placeholder="回复" />
      <div style="margin: 16px;">
        <van-button round block type="info" @click="Tosub" native-type="submit">提交</van-button>
      </div>
    </van-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tousuList: [
      ],
      show: false,
      username: "",
      showbtn: false
    };
  },
  mounted() {
    this.$axios
      .get("http://localhost:8088/api/tousu/gettousulist")
      .then(res => {
        this.tousuList = res.data;
      });
  },
  methods: {
    Toagree() {
      this.$toast("同意");
    },
    Tojj() {
      this.$toast("已拒绝");
    },
    Todel() {
      this.$toast("已删除");
    },
    Tohf() {
      this.show = true;
    },
    Tosub() {
      this.$toast("回复成功");
    }
  }
};
</script>
<style lang="scss">
.tousuBox {
  margin-top: 10px;
  .van-button {
    margin-right: 5px;
  }
}
</style>