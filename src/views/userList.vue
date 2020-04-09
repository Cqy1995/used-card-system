<template>
  <div class="userList">
      <van-nav-bar title="管理列表" />
      <van-tabs v-model="active">
        <van-tab title="待处理">
             <van-cell title="此预约待处理"/>
        </van-tab>
        <van-tab title="处理中"><van-cell title="此预约处理中"/></van-tab>
        <van-tab title="已完成"><van-cell title="此预约已完成"/></van-tab>
        </van-tabs>
  </div>
</template>

<script>
export default {
data() {
    return {
      active: 1
    };
  }
}
</script>

<style>

</style>