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
      <template #footer>
        <van-button size="mini" to="/serviceManagent/bargaintwo">去砍价</van-button>
      </template>
    </van-card>
    <van-field v-model="text" label="姓名" placeholder="请输入姓名" />
    <van-field v-model="tel" type="tel" label="手机号" placeholder="请输入手机号" />
    <van-field v-model="number" type="number" label="心里价位" placeholder="请输入心里价位" />
    <van-button type="info">获取底价</van-button>
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
      ]
    };
  }
};
</script>
<style  scoped>
.van-swipe {
  height: 190px;
}
</style>