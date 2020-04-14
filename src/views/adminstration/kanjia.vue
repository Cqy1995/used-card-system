<template>
  <div>
    <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">投诉列表</van-divider>
    <van-cell v-for="item in kanjiaList" :key="item._id">
      <!-- 使用 right-icon 插槽来自定义右侧图标 -->
      <template #title>
        <span class="custom-title">{{item.pingpai+item.xinghao}}</span>
        <van-tag type="danger">砍价</van-tag>
      </template>
      <template #label>
        <div>{{item.color}}</div>
        <div>车辆售价:{{item.money}}&nbsp;&nbsp;&nbsp;&nbsp;砍价:{{item.kmoney}}</div>
        <div>联系人电话：{{item.phone}}</div>
      </template>
    </van-cell>
  </div>
</template>
<script>
export default {
  data() {
    return {
      kanjiaList: []
    };
  },
  mounted() {
    this.$axios
      .get("http://localhost:8088/api/kanjia/getkanjialist")
      .then(res => {
        this.kanjiaList = res.data;
      });
  }
};
</script>
<style>
</style>