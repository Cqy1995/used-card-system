<template>
  <div class="carList">
    <van-nav-bar title="汽车列表" />
    <van-card
      v-for="(item, index) in carlist"
      :tag="item.tag"
      :price="item.price"
      :title="item.title"
      :desc="item.desc"
      :thumb="item.imgsrc"
      :origin-price="item.originprice"
      :key="index"
    >
      <template #tags>
        <van-tag plain type="danger">{{item.tabname}}</van-tag>
      </template>
    </van-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carlist: []
    };
  },
  methods: {
    onClickIcon() {
      Toast("点击图标");
    },

    onClickButton() {
      Toast("点击按钮");
    }
  },
  mounted() {
    let carname = this.$route.query.name;
    switch (carname) {
      case "大型车":
        this.carlist = [
          {
            tag: "女神",
            price: "999000.00",
            desc:"中国龙中国风",
            title: "中国龙",
            originprice: "1000099.00",
            tabname: "女神代步",
            imgsrc:"https://adm3.autoimg.cn/admdfs/g1/M00/93/9A/ChsEj16L7a-AVZ-FAADnlkUnPuU922.jpg"
          },
          {
            tag: "811",
            price: "888000.00",
            desc:"保时捷中的经典",
            title: "保时捷911",
            originprice: "10000888.00",
            tabname: "渣男必备",
            imgsrc:"https://car2.autoimg.cn/cardfs/product/g30/M07/32/3E/240x180_0_q95_c42_autohomecar__ChsEf15yPUGAZ7iBAAbAzCVLDC0035.jpg"
          }
        ];
        break;
      case "跑车":
        break;
      case "SUV":
        break;
      case "紧凑型":
        break;
      case "中型":
        break;
      case "小型车":
        break;
      case "MPV":
        break;
      default:
        break;
    }
  }
};
</script>

<style>
</style>