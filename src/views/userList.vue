<template>
  <div class="userList">
    <van-nav-bar @click-left="onClickLeft" title="管理列表" left-arrow />
    <van-cell-group v-show="active==0">
      <van-cell v-for="item in shopcarList" title="单元格" value="内容" :label="item.phone" />
    </van-cell-group>
    <van-card
    v-show="active==1"
      v-for="item in shopcarList"
      :price="item.price"
      :desc="item.color"
      :title="item.carname"
      :thumb="item.imgurl"
    >
      <template #price-top>
        <div>下单日期: {{item.ordertime}}</div>
        <div>订单号: {{item.orderno}}</div>
      </template>
    </van-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      shopcarList: [],
      tit: ""
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      if (this.$route.params.id == "a") {
        this.active = 0
        this.$axios.get("http://localhost:8088/api/getyy").then(res => {
          this.$toast("订单获取成功");
          this.shopcarList = res.data;
        });

        this.tit = "预约详情";
      } else if (this.$route.params.id == "b") {
        this.active = 1
        this.tit = "订单详情";
        this.$axios.get("http://localhost:8088/api/getorder").then(res => {
          this.$toast("订单获取成功");
          this.shopcarList = res.data;
        });
      } else if (this.$route.params.id == "c") {
        this.tit = "保险详情";
      } else if (this.$route.params.id == "d") {
        this.tit = "服务详情";
      } else if (this.$route.params.id == "e") {
        this.tit = "通知详情";
      } else if (this.$route.params.id == "f") {
        this.tit = "砍价详情";
      } else if (this.$route.params.id == "h") {
        this.tit = "预约管理";
      } else if (this.$route.params.id == "i") {
        this.tit = "投诉管理";
      } else if (this.$route.params.id == "g") {
        this.tit = "禁用管理";
      } else if (this.$route.params.id == "k") {
        this.tit = "砍价管理";
      }
    },
    onClickLeft() {
      this.$router.push("/user");
    }
  }
};
</script>

<style lang="scss">
.userList {
  .van-card__content {
    text-align: left;
    margin-left: 0.2rem;
  }
}
</style>