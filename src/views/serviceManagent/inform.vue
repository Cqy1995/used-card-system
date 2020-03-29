<template>
  <div>
    <van-tabs v-model="active">
      <van-tab title="系统通知">
        <van-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o" >该系统1.0完成该系统1.0完成该系统1.0完成该系统1.0完成该系统1.0完成</van-notice-bar>
        <van-notice-bar wrapable :scrollable="true">本app注册送100元油卡！</van-notice-bar>
      </van-tab>
      <van-tab title="车展通知">
        <van-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o">大众帕沙特新车两箱</van-notice-bar>
      </van-tab>
      <van-tab title="打折通知">
        <van-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o">飞度优惠一万元</van-notice-bar>
      </van-tab>
    </van-tabs>
  </div>
</template>