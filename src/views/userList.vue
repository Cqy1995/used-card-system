<template>
  <div class="userList">
    <van-nav-bar @click-left="onClickLeft" title="管理列表" left-arrow />
    <van-cell-group v-show="active==0">
      <van-cell
        v-for="item in shopcarList"
        :title="'预约人: '+item.username"
        :value="'预约时间: '+item.yytime"
        :label="'预约电话: '+item.phone"
      ></van-cell>
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
    <van-swipe-cell v-show="active==6" v-for="item in yygllist">
      <van-cell
        :border="false"
        :title="'预约人: '+item.username"
        :value="'预约时间: '+item.yytime"
        :label="'预约电话: '+item.phone"
      ></van-cell>
      <template #right>
        <van-button square type="primary" text="确定" @click="ToQd"/>
        <van-button square type="danger" text="删除" @click="Todel(item._id)" />
      </template>
    </van-swipe-cell>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      shopcarList: [],
      tit: "",
      yygllist: []
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      if (this.$route.params.id == "a") {
        this.active = 0;
        this.$axios.get("http://localhost:8088/api/getyy").then(res => {
          this.$toast("订单获取成功");
          this.shopcarList = res.data;
        });

        this.tit = "预约详情";
      } else if (this.$route.params.id == "b") {
        this.active = 1;
        this.tit = "订单详情";
        this.$axios.get("http://localhost:8088/api/getorder").then(res => {
          this.$toast("订单获取成功");
          this.shopcarList = res.data;
        });
      } else if (this.$route.params.id == "c") {
        this.active = 2;
        this.tit = "保险详情";
      } else if (this.$route.params.id == "d") {
        this.active = 3;
        this.tit = "服务详情";
      } else if (this.$route.params.id == "e") {
        this.active = 4;
        this.tit = "通知详情";
      } else if (this.$route.params.id == "f") {
        this.active = 5;
        this.tit = "砍价详情";
      } else if (this.$route.params.id == "h") {
        this.active = 6;
        this.tit = "预约管理";
        this.$axios.get("http://localhost:8088/api/getyy").then(res => {
          this.$toast("订单获取成功");
          this.yygllist = res.data;
        });
      } else if (this.$route.params.id == "i") {
        this.active = 7;
        this.tit = "投诉管理";
      } else if (this.$route.params.id == "g") {
        this.active = 8;
        this.tit = "禁用管理";
      } else if (this.$route.params.id == "k") {
        this.active = 9;
        this.tit = "砍价管理";
      }
    },
    onClickLeft() {
      this.$router.push("/user");
    },
    ToQd() {
      this.$toast("预约成功")
    },
    Todel(a) {
      this.$axios
        .get("http://localhost:8088/api/delyy", {
          params: {
            _id: a
          }
        })
        .then(res => {
          this.$toast("删除成功");
          this.init()
        });
      
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
  .van-swipe-cell {
    font-size: 0;
    .van-button{
      height: 100%;
    }
  }
}
</style>