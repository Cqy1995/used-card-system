<template>
  <div>
    <van-nav-bar title="服务管理" />
    <van-grid column-num="2">
      <van-grid-item icon="umbrella-circle" text="保险" to="/serviceManagent/insurance" />
      <van-grid-item icon="service" text="服务" to="/serviceManagent/serve" />
      <van-grid-item icon="volume" text="通知管理" to="/serviceManagent/inform" />
      <van-grid-item icon="column" text="砍价" to="/serviceManagent/bargain" />
    </van-grid>
  </div>
</template>