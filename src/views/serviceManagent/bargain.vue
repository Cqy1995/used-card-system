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
        "https://panovr.autoimg.cn/pano/g29/M0B/0E/9F/ChcCSFwlml2AH73bAACSo_o2ZOI427.png",
        "https://panovr.autoimg.cn/pano/g29/M06/0E/9D/ChcCSFwlmleAPRBQAACBqarAdY8112.png",
        "https://panovr.autoimg.cn/pano/g28/M06/11/49/ChsEfVwlmlKALEgBAACUjDgFnBM395.png"
      ],
      tlphone: '',
      kmoney: ''
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
        pingpai: "奥迪",
        xinghao: "a7",
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