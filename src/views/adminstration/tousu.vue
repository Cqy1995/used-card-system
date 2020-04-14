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
      </template>
    </van-cell>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tousuList: []
    };
  },
  mounted() {
    this.$axios
      .get("http://localhost:8088/api/tousu/gettousulist")
      .then(res => {
        this.tousuList = res.data;
      });
  }
};
</script>
<style>
</style>