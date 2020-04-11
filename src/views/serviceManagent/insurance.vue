<template>
  <div>
    <van-search v-model="value" placeholder="保险信息查询" />
    <van-tabs v-model="active" @change="varttabChange">
      <van-tab title="强制保险">
        <!-- <van-card
          num="1"
          price="899.00"
          desc="家用6座以下为950元；家用6座以上为1100元"
          title="交强险"
          :thumb="(imgsList[0])"
        >
          <template #tags>
            <van-tag plain type="danger">强制保险</van-tag>
          </template>
          <template #footer>
            <van-button size="mini" @click="showPopup">立即投保</van-button>
          </template>
        </van-card>-->
      </van-tab>
      <van-tab title="商业保险">
        <!-- <van-card
          num="2"
          price="999.00"
          desc="基础保费+裸车价格×1.0880%"
          title="车辆损失险"
          :thumb="(imgsList[1])"
        >
          <template #tags>
            <van-tag plain type="danger">商业保险</van-tag>
          </template>
          <template #footer>
            <van-button size="mini" @click="showPopup">立即投保</van-button>
          </template>
        </van-card>
        <van-card
          num="1"
          price="599.00"
          desc="赔付额度5-100万，保费价格700-2200元不等"
          title="第三方责任险"
          :thumb="(imgsList[2])"
        >
          <template #tags>
            <van-tag plain type="danger">商业保险</van-tag>
          </template>
          <template #footer>
            <van-button size="mini" @click="showPopup">立即投保</van-button>
          </template>
        </van-card>
        <van-card num="2" price="1388.00" desc="赔付额度10-100万" title="车损险" :thumb="(imgsList[3])">
          <template #tags>
            <van-tag plain type="danger">商业保险</van-tag>
          </template>
          <template #footer>
            <van-button size="mini" @click="showPopup">立即投保</van-button>
          </template>
        </van-card>-->
      </van-tab>
    </van-tabs>
    <van-swipe-cell v-for="(item) in datalist" :key="item._id">
      <van-card
        :num="item.insurancenumber"
        :price="item.insuranceprice"
        :desc="item.introduction"
        :title="item.title"
        class="goods-card"
        thumb="https://img.yzcdn.cn/vant/cat.jpeg"
      >
        <template #tags>
          <van-tag plain type="danger">{{item.labname}}</van-tag>
        </template>
      </van-card>
    </van-swipe-cell>
  </div>
</template>
<script>
export default {
  name: "bargain",
  data() {
    return {
      active: 0,
      value: "",
      imgsList: [
        require("../../assets/img/jqx.png"),
        require("../../assets/img/csx.png"),
        require("../../assets/img/ssx.png"),
        require("../../assets/img/szx.jpg")
      ],
      datalist: []
    };
  },
  methods: {
    showPopup() {
      this.$router.push("/serviceManagent/insuranceDetail");
    },
    getinsuranceList() {
      this.$axios
        .get("http://localhost:8088/api/insurance/getsurance", {
          params: {
            type: +this.active
          }
        })
        .then(res => {
          console.log(res, "请求成功");
          if (res.status == 200) {
            this.datalist = res.data;
          }
        });
    },
    varttabChange(index) {
      console.log();
      this.getinsuranceList();
    }
  },
  mounted() {
    this.getinsuranceList();
  }
};
</script>