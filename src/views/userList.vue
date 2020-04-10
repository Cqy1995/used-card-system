<template>
  <div class="userList">
    <van-nav-bar @click-left="onClickLeft" title="管理列表" left-arrow/>
    <van-tabs v-model="active">
      <van-tab title="待处理">
        <van-cell title="此预约待处理" />
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <van-cell v-for="item in list" :key="item" :title="item" />
        </van-list>
      </van-tab>
      <van-tab title="处理中">
        <van-cell title="此预约处理中" />
      </van-tab>
      <van-tab title="已完成">
        <van-cell title="此预约已完成" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      list: [],
      loading: false,
      finished: false,
      tit: ''
    };
  },
  methods: {
    onLoad() {
      console.log(this.$route.params.id);
      
      if(this.$route.params.id=='a'){
        this.tit = '预约详情'
      }else if(this.$route.params.id=='b'){
        this.tit = '订单详情'
      }else if(this.$route.params.id=='c'){
        this.tit = '保险详情'
      }else if(this.$route.params.id=='d'){
        this.tit = '服务详情'
      }else if(this.$route.params.id=='e'){
        this.tit = '通知详情'
      }else if(this.$route.params.id=='f'){
        this.tit = '砍价详情'
      }else if(this.$route.params.id=='h'){
        this.tit = '预约管理'
      }else if(this.$route.params.id=='i'){
        this.tit = '投诉管理'
      }else if(this.$route.params.id=='g'){
        this.tit = '禁用管理'
      }else if(this.$route.params.id=='k'){
        this.tit = '砍价管理'
      }
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.tit+this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    onClickLeft() {
      this.$router.push("/user");
    }
  }
};
</script>

<style>
</style>