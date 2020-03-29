<template>
  <div class="yysq">
      <van-nav-bar title="预约申请"/>
      <textarea></textarea>
      <van-button type="default" class="subSq">立即预约</van-button>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.yysq{
    overflow: hidden;
    textarea{
        display: block;
        width: 6rem;
        height: 3rem;
        border: 1px solid gray;
        margin: 1rem auto;
        margin-bottom: 0.5rem;
        font-size: 14px;
    }
    .subSq{
        width: 3rem;
    }
}
</style>