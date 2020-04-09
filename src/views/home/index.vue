<template>
  <div class="home">
    <van-nav-bar title="首页" />
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" width="100%" class="homeBanner" />
      </van-swipe-item>
    </van-swipe>
    <van-grid column-num="2" active-color="rgb(216, 30, 6)">
      <van-grid-item icon="photo-o" text="二手车分类管理" to="/oldcarmsg" />
      <van-grid-item icon="photo-o" text="二手车品牌管理" to="/oldcarmsg" />
      <van-grid-item icon="photo-o" text="二手车颜色管理" to="/oldcarmsg" />
      <van-grid-item icon="photo-o" text="二手车车辆管理" to="/oldcarmsg" />
    </van-grid>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      images: [
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585420340538&di=5183502e1db05c0d4828ca1db8b6ddc8&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fb%2F5563d2fb8f2c0.jpg",
        "http://img2.imgtn.bdimg.com/it/u=2525740924,1398336316&fm=26&gp=0.jpg"
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.homeBanner {
  height: 4rem;
}
</style>
<style lang="scss">
.van-tabbar-item--active {
  color: rgb(216, 30, 6);
}
</style>
