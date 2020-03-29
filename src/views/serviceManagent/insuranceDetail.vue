<template>
  <div>
    <van-panel title="保障详情" desc status="可投保">
      <div style="font-size:13px;">
        车险分为强制保险与商业保险，以下是各类车险的具体价格表：
        <br />1、交强险：家用6座以下为950元；家用6座以上为1100元
        <br />2、车辆损失险：基础保费+裸车价格×1.0880%
        <br />3、第三方责任险：赔付额度5-100万，保费价格700-2200元不等
        <br />4、盗抢险：基础保费+裸车价格×费率
        <br />5、玻璃单独破碎险：进口新车购置价×0.25%，国产新车购置价×0.15%
        <br />6、自燃损失险：新车购置价×0.15%
        <br />7、不计免赔特约险：(车辆损失险价格+第三方责任险价格)×20%
      </div>
    </van-panel>
    <van-cell-group title="投保人信息">
      <van-field v-model="value" placeholder="投保人姓名" />
      <van-field v-model="number" type="number" placeholder="身份证号" />
      <van-cell center title="是否有医保">
        <template #right-icon>
          <van-switch v-model="checked" size="24" />
        </template>
      </van-cell>
    </van-cell-group>
    <van-button type="info">立即投保</van-button>
  </div>
</template>
<style scoped>
.van-cell__title,
.van-cell__value {
  text-align: left;
}
.van-panel__content {
  padding: 10px;
}
.van-cell-group__title {
  text-align: left;
  color: black;
}
</style>
<script>
export default {
  data() {
    return {
      value: "",
      number: Number,
      checked: false
    };
  }
};
</script>