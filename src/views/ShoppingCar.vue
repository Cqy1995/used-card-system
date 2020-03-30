<template>
  <div class="shoppingcar">
    <van-nav-bar title="购物车" />
    <van-tabs v-model="active">
      <van-tab title="劳斯莱斯">
        <van-card
          num="2"
          price="2.00"
          desc="家用6座以下为950元；家用6座以上为1100元"
          thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        >
          <template #tags>
          </template>
          <template #footer>
            <van-button size="mini" @click="showPopup">立即购买</van-button>
          </template>
        </van-card>
      </van-tab>
      <van-tab title="桑塔纳">
        <van-card
          num="2"
          price="2.00"
          desc="基础保费+裸车价格×1.0880%"
          thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        >
          <template #tags>
          </template>
          <template #footer>
            <van-button size="mini" @click="showPopup">立即购买</van-button>
          </template>
        </van-card>
        <van-card
          num="2"
          price="2.00"
          desc="赔付额度5-100万，保费价格700-2200元不等"
          title="第三方责任险"
          thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        >
          <template #tags>
            <van-tag plain type="danger">商业保险</van-tag>
          </template>
          <template #footer>
            <van-button size="mini" @click="showPopup">立即投保</van-button>
          </template>
        </van-card>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      value: ""
    };
  },
  methods: {
    showPopup() {
      this.$router.push("/serviceManagent/insuranceDetail");
    }
  }
};
</script>

<style>
</style>