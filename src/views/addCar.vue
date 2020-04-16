<template>
  <div>
    <van-nav-bar title="发布车源" @click-left="onClickLeft" left-arrow />
    <van-cell title="信息录入" />
    <!-- 输入任意文本 -->
    <van-field v-model="pinpai" label="品牌" placeholder="别克" />
    <van-field v-model="color" label="颜色" placeholder="白色" />
    <van-field v-model="year" label="出产年份" placeholder="2020年" />
    <van-field v-model="leixing" label="类型" placeholder="SUV" />
    <van-field v-model="decs" label="描述" placeholder="2.0T涡轮蒸鸭" />
    <van-field v-model="yuanjia" label="原价" placeholder="SUV" />
    <van-field v-model="xianjia" label="现价" placeholder="2.0T涡轮蒸鸭" />
    <van-cell title="上传图片" />
    <van-uploader :after-read="afterRead" />
    <div>
      <van-button color="red" plain @click="addcar">发布车源</van-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pinpai: "",
      color: "",
      year: "",
      leixing: "",
      decs: "",
      yuanjia: "",
      xianjia: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
    addcar() {
      if (
        this.pinpai == "" ||
        this.color == "" ||
        this.year == "" ||
        this.leixing == "" ||
        this.decs == "" ||
        this.yuanjia == "" ||
        this.xianjia == ""
      ) {
        this.$toast("请填写完整");
        return false;
      }
      let args = {
        pinpai: this.pinpai,
        color: this.color,
        year: this.year,
        leixing: this.leixing,
        yuanjia: this.yuanjia,
        xianjia: this.xianjia,
        decs: this.decs,
        imgUrl: this.imgUrl
      };
      this.$axios
        .get("http://localhost:8088/api/createCarList", {
          params: args
        })
        .then(res => {
          console.log(res);
          this.$toast("添加成功");
          this.$router.push("/home");
        });
    }
  }
};
</script>