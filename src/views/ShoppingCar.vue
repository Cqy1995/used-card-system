<template>
  <div class="shoppingcar">
    <van-nav-bar title="购物车" @click-left="onClickLeft" left-arrow />
    <van-card
      v-for="(item,index) in carList"
      :price="item.price"
      :desc="item.desc"
      :title="item.title"
      :thumb="item.thumb"
      :key="index"
    >
      <template #footer>
        <van-button size="mini" @click="Toedit(index)">修改</van-button>
        <van-button size="mini" @click="Todel(index)">删除</van-button>
      </template>
    </van-card>
    <van-submit-bar :price="19000000" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      value: "",
      carList: [
        {
          price: "6.79万",
          desc: "2013款 蓝标 1.8TSI标配型",
          title: "大众夏朗",
          thumb:
            "http://img4.imgtn.bdimg.com/it/u=2388327870,2514168806&fm=26&gp=0.jpg"
        },
        {
          price: "6.79万",
          desc: "2017款 蓝标 1.5T自动舒适型",
          title: "力帆轩朗",
          thumb:
            "http://img4.imgtn.bdimg.com/it/u=3331455421,259079271&fm=26&gp=0.jpg"
        },
        {
          price: "6.79万",
          desc: "2016款 蓝标 1.5T自动两驱精英型",
          title: "哈弗H6",
          thumb:
            "http://e.hiphotos.baidu.com/image/h%3D300/sign=cd92f6ddf903738dc14a0a22831ab073/08f790529822720e78606b8774cb0a46f21fab25.jpg"
        }
      ]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/home");
    },
    showPopup() {
      this.$router.push("/serviceManagent/insuranceDetail");
    },
    Toedit(a) {
      this.$toast("改变颜色");
    },
    Todel(a) {
      this.carList.splice(a, 1);
    },
    onSubmit() {
      this.$router.push("/user");
    }
  }
};
</script>

<style lang="scss">
.shoppingcar {
  .van-card__content {
    text-align: left;
    margin-left: 0.2rem;
  }
}
</style>