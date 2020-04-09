<template>
  <div>
    <van-tabs v-model="active">
      <van-tab title="系统通知">
        <van-notice-bar
          color="#1989fa"
          background="#ecf9ff"
          left-icon="info-o"
        >该系统1.0完成该系统1.0完成该系统1.0完成该系统1.0完成该系统1.0完成</van-notice-bar>
        <van-cell v-for="(item, index) in opinionTitle" :title="item.opinionName" :key="index" />
      </van-tab>
      <van-tab title="车展通知">
        <van-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o">各大品牌新车不断上新中</van-notice-bar>
        <van-cell v-for="(item, index) in opinionTitleTwo" :title="item.opinionName" :key="index" />
      </van-tab>
      <van-tab title="打折通知">
        <van-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o">飞度优惠一万元</van-notice-bar>
        <van-cell
          v-for="(item, index) in opinionTitleThree"
          :title="item.opinionName"
          :key="index"
        />
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      opinionTitle: [
        {
          opinionName: "本系统对新用户有100元优惠油卡"
        },
        {
          opinionName: "系统中可投保"
        },
        {
          opinionName: "系统在努力完善中..."
        }
      ],
      opinionTitleTwo: [
        {
          opinionName: "北京车展-2020年4月9在五棵松举行"
        },
        {
          opinionName: "沈阳车展-2020年3月4在苏家屯举行"
        },
        {
          opinionName: "厦门车展-2020年2月3在谷良峪举行"
        },
        {
          opinionName: "上海车展-2020年1月7在外滩举行"
        }
      ],
      opinionTitleThree: [
        {
          opinionName: "大众帕沙特打折优惠中"
        },
        {
          opinionName: "日产尼桑疯狂清仓"
        },
        {
          opinionName: "奔驰c级简直不要钱"
        },
        {
          opinionName: "丰田汉兰达2020款正在路上"
        },
        {
          opinionName: "GTR每个男人的梦想，努力吧少年"
        }
      ]
    };
  }
};
</script>