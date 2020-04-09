<template>
  <div style="margin-bottom: 100px;">
    <van-notice-bar
      color="#1989fa"
      background="#ecf9ff"
      left-icon="info-o"
    >目前只有两款车可以进行砍价，线条完美的奥迪A7与撩妹神器保时捷911                   </van-notice-bar>
    <van-card
      tag="A7"
      price="890000.00"
      desc="奥迪A7,线条完美"
      title="奥迪A7"
      thumb="https://panovr.autoimg.cn/pano/g29/M0B/0E/9F/ChcCSFwlml2AH73bAACSo_o2ZOI427.png"
      origin-price="1000000.00"
    >
      <template #tags>
        <van-tag plain type="danger">帅气不失动力</van-tag>
      </template>
      <template #footer>
        <van-button size="mini" to="/serviceManagent/bargainone">去砍价</van-button>
      </template>
    </van-card>
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
  </div>
</template>
<script>
export default {
  name: "bargain",
  data() {
    return {};
  }
};
</script>
<style  scoped>
.van-swipe {
  height: 190px;
}
</style>