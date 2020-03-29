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
      tag="标签"
      price="89000.00"
      desc="奥迪A7就是牛B"
      title="奥迪A7"
      thumb="https://panovr.autoimg.cn/pano/g29/M0B/0E/9F/ChcCSFwlml2AH73bAACSo_o2ZOI427.png"
      origin-price="100000.00"
    />
    <van-field v-model="text" label="姓名" placeholder="请输入姓名"  />
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
        "https://panovr.autoimg.cn/pano/g29/M0B/0E/9F/ChcCSFwlml2AH73bAACSo_o2ZOI427.png",
        "https://panovr.autoimg.cn/pano/g29/M06/0E/9D/ChcCSFwlmleAPRBQAACBqarAdY8112.png",
        "https://panovr.autoimg.cn/pano/g28/M06/11/49/ChsEfVwlmlKALEgBAACUjDgFnBM395.png"
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