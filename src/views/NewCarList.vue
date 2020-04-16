<template>
  <div class="newcarlist">
    <van-nav-bar title="车辆列表" />
    <div class="newcarMain">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" @change="ToPp" :options="option1" />
        <van-dropdown-item v-model="value2" @change="ToJg" :options="option2" />
      </van-dropdown-menu>
      <van-card
        v-for="item in newCarList"
        :price="item.xianjia+'万'"
        :desc="item.decs"
        :title="item.pinpai"
        :thumb="item.imgUrl ? item.imgUrl : './assets/img/csx.png'"
        :origin-price="item.yuanjia+'万'"
        :key="item._id"
      >
        <template #tags>
          <van-tag plain type="danger">{{item.color}}</van-tag>
        </template>
      </van-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      value1: 0,
      value2: "a",
      option1: [
        { text: "品牌", value: 0 },
        { text: "本田", value: 1 },
        { text: "哈弗H6", value: 2 },
        { text: "力帆轩朗", value: 3 },
        { text: "大众夏朗", value: 4 },
        { text: "奇瑞", value: 5 },
      ],
      option2: [
        { text: "价格", value: "a" },
        { text: "从低到高", value: "b" },
        { text: "从高到低", value: "c" }
      ],
      newCarList: [],
      newCarList1: []
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    //   /api/getCarList
    init() {
      this.$axios.get("http://localhost:8088/api/getCarList").then(res => {
        this.newCarList = res.data;
        this.newCarList1 = res.data
      });
    },
    onSearch(val) {
      const a = this.newCarList1
      if(val=="本田"){
          this.newCarList = a.filter(item => item.pinpai=="本田")
      }else if(val=="哈弗H6") {
          this.newCarList = a.filter(item => item.pinpai=="哈弗H6")
      }else if(val=="力帆轩朗") {
          this.newCarList = a.filter(item => item.pinpai=="力帆轩朗")
      }else if(val=="大众夏朗") {
          this.newCarList = a.filter(item => item.pinpai=="大众夏朗")
      }else if(val=="奇瑞") {
          this.newCarList = a.filter(item => item.pinpai=="奇瑞")
      }else {
          this.$toast("暂无商品");
      }
    },
    onCancel() {
      this.$toast("取消");
    },
    ToPp() {
        const a = this.newCarList1
        if(this.value1=="0") {
            this.newCarList = a
        }else if(this.value1==1) {
            this.newCarList = a.filter(item => item.pinpai=="本田")
        }else if(this.value1=="2") {
            this.newCarList = a.filter(item => item.pinpai=="哈弗H6")
        }else if(this.value1=="3") {
            this.newCarList = a.filter(item => item.pinpai=="力帆轩朗")
        }else if(this.value1=="4") {
            this.newCarList = a.filter(item => item.pinpai=="大众夏朗")
        }else if(this.value1=="5") {
            this.newCarList = a.filter(item => item.pinpai=="奇瑞")
        }
    },
    ToJg() {
      if (this.value2 == "b") {
        function dg(property) {
          return function(a, b) {
            var value1 = a[property];
            var value2 = b[property];
            return value1 - value2;
          };
        }
        this.newCarList = this.newCarList.sort(dg("xianjia"));
      } else {
        function gd(property) {
          return function(a, b) {
            var value1 = a[property];
            var value2 = b[property];
            return -(value1 - value2);
          };
        }
        this.newCarList = this.newCarList.sort(gd("xianjia"));
      }
    }
  }
};
</script>
<style lang="scss">
.newcarlist{
  margin-bottom: 1rem;
}
.newcarlist .van-card__content {
  text-align: left;
  margin-left: 0.2rem;
}
</style>