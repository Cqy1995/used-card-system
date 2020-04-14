<template>
  <div style="margin-bottom: 100px;">
    <van-nav-bar title="砍价" />
    <van-cell title="汽车图片" />
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" width="100%" class="homeBanner" />
      </van-swipe-item>
    </van-swipe>
    <van-cell title="基本信息" />
    <van-card
      tag="911"
      price="999000.00"
      desc="保时捷中的经典"
      title="保时捷911"
      to="/serviceManagent/bargaintwo"
      thumb="https://car2.autoimg.cn/cardfs/product/g30/M07/32/3E/240x180_0_q95_c42_autohomecar__ChsEf15yPUGAZ7iBAAbAzCVLDC0035.jpg"
      origin-price="1200000.00"
    >
      <template #tags>
        <van-tag plain type="danger">撩妹神器</van-tag>
        <van-tag plain type="danger">渣男必备</van-tag>
      </template>
    </van-card>
    <van-field v-model="tlphone" type="tel" label="手机号" placeholder="请输入手机号" />
    <van-field v-model="kmoney" type="number" label="心里价位" placeholder="请输入心里价位" />
    <van-button type="info" @click="getdijia">获取底价</van-button>
  </div>
</template>
<script>
export default {
  name: "bargain",
  data() {
    return {
      images: [
        "https://car2.autoimg.cn/cardfs/product/g30/M04/36/59/240x180_0_q95_c42_autohomecar__ChcCSV5yPUCAfXU7AAfOMtmpvkU606.jpg",
        "https://car2.autoimg.cn/cardfs/product/g30/M05/31/9B/240x180_0_q95_c42_autohomecar__ChsEoF5yPUCAPFO2AAb1rxZ3HSA707.jpg",
        "https://car3.autoimg.cn/cardfs/product/g30/M00/32/3E/240x180_0_q95_c42_autohomecar__ChsEf15yPT-AQN_wAAdfzyEOArY531.jpg"
      ],
      tlphone: "",
      kmoney: ""
    };
  },
  methods: {
    getdijia() {
      if (this.tlphone == "") {
        this.$toast("请输入手机号");
        return false;
      }
      if (this.kmoney == "") {
        this.$toast("请输入心里价位");
        return false;
      }
      let args = {
        phone: this.tlphone,
        kmoney: this.kmoney,
        pingpai: "保时捷",
        xinghao: "911",
        color: "红色",
        money: "500万"
      };
      this.$axios
        .get("http://localhost:8088/api/kanjia/createkanjia", {
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
<style  scoped>
.van-swipe {
  height: 190px;
}
</style>