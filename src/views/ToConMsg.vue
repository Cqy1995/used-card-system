<template>
  <div id="ToConMsg">
    <van-nav-bar title="二手车问题管理" @click-left="onClickLeft" left-arrow />
    <van-swipe-cell v-for="item in conmsgList">
      <van-cell :border="false" :title="item.consoult" />
      <template #right>
        <van-button square type="danger" text="删除" @click="Todel(item._id)" />
      </template>
    </van-swipe-cell>
  </div>
</template>

<script>
export default {
  data() {
    return {
      conmsgList: []
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    onClickLeft() {
      this.$router.push("/home");
    },
    init() {
      this.$axios
        .get("http://localhost:8088/api/getconsoult", {
          params: {
            consoult: this.conmsg
          }
        })
        .then(res => {
          this.$toast("咨询获取成功");
          this.conmsgList = res.data;
        });
    },
    Todel(a) {
      this.$axios
        .get("http://localhost:8088/api/delconsoult", {
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
#ToConMsg .van-swipe-cell {
  font-size: 0;
}
</style>