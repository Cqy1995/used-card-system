<template>
  <div>
    <van-tabs v-model="active"  @change="changeTab">
      <van-tab title="系统通知">
        <van-notice-bar
          color="#1989fa"
          background="#ecf9ff"
          left-icon="info-o"
        >系统消息主要是通知系统内部信息</van-notice-bar>
      </van-tab>
      <van-tab title="车展通知">
        <van-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o">车展信息主要是车展活动的最新通知</van-notice-bar>
      </van-tab>
      <van-tab title="打折通知">
        <van-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o">打折通知是打折力度最大的车辆进行通知</van-notice-bar>
      </van-tab>
    </van-tabs>
    <van-cell v-for="item in dataList" :key="item._id">
      <!-- 使用 right-icon 插槽来自定义右侧图标 -->
      <template #title>
        <van-tag type="danger">{{namelist[active]}}</van-tag>
      </template>
      <template #label>
        <div>{{item.fbmain}}</div>
        <div>发布人:{{item.fbuser}}&nbsp;&nbsp;&nbsp;&nbsp;发布时间:{{item.fbtime}}</div>
      </template>
    </van-cell>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      dataList: [],
      namelist: ["系统通知", "车展通知", "打折通知"]
    };
  },
  mounted() {
    this.getdata();
  },
  methods: {
    getdata() {
      this.$axios
        .get("http://localhost:8088/api/tongzhi/gettongzhilist", {
          params: {
            fbtype: 1 + this.active
          }
        })
        .then(res => {
          this.dataList = res.data;
        });
    },
    changeTab(){
      this.getdata();
    }
  }
};
</script>