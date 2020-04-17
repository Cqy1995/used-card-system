<template>
  <div id="Carconsoult">
    <van-nav-bar title="二手车问题咨询" @click-left="onClickLeft" left-arrow />
    <van-field
    v-model="conmsg"
      rows="3"
      autosize
      label="咨询"
      type="textarea"
      placeholder="请输入内容"
      show-word-limit
    />
    <van-button type="default" @click="ToConsoult">提交</van-button>
  </div>
</template>

<script>
export default {
    data() {
        return{
            conmsg: ""
        }
    },
  methods: {
    onClickLeft() {
      this.$router.push("/home");
    },
    ToConsoult() {
        if(this.conmsg==""){
            this.$toast("请输入内容")
        }else {
            this.$axios
          .get("http://localhost:8088/api/addconsoult",{
            params: {
              consoult: this.conmsg
            }
          }).then(res => {
            this.$toast("咨询添加成功");
            this.$router.push("/home");
          })
        }
    }
  }
};
</script>

<style>
</style>