<template>
  <div class="carList">
    <van-nav-bar title="商品列表" @click-left="onClickLeft" left-arrow />

    <van-card num="2" tag="标签" price="10.00" desc="描述信息" title="商品标题" :thumb="imageURL">
      <view slot="footer">
        <van-button size="mini">加入购物车</van-button>
        <van-button size="mini">立即购买</van-button>
      </view>
    </van-card>
    <van-card num="2" tag="标签" price="10.00" desc="描述信息" title="商品标题" :thumb="imageURL">
      <view slot="footer">
        <van-button size="mini">加入购物车</van-button>
        <van-button size="mini">立即购买</van-button>
      </view>
    </van-card>
    <van-card num="2" tag="标签" price="10.00" desc="描述信息" title="商品标题" :thumb="imageURL">
      <view slot="footer">
        <van-button size="mini">加入购物车</van-button>
        <van-button size="mini">立即购买</van-button>
      </view>
    </van-card>
    <van-card num="2" tag="标签" price="10.00" desc="描述信息" title="商品标题" :thumb="imageURL">
      <view slot="footer">
        <van-button size="mini">加入购物车</van-button>
        <van-button size="mini">立即购买</van-button>
      </view>
    </van-card>
     <!-- <van-goods-action-button
    text="加入购物车"
    type="warning"
    bind:click="onClickButton"
  />
  <van-goods-action-button
    text="立即购买"
    bind:click="onClickButton"
  /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageURL:
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585420340538&di=5183502e1db05c0d4828ca1db8b6ddc8&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fb%2F5563d2fb8f2c0.jpg"
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/oldcarmsg");
    },
    onClickIcon() {
    Toast('点击图标');
  },

  onClickButton() {
    Toast('点击按钮');
  }
  }
};
</script>

<style>
</style>