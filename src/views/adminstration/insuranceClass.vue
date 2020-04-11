<template>
  <div style="overflow-y: auto;
    margin-bottom: 1.2rem;">
    <van-nav-bar title="保险分类管理" />
    <van-tabs v-model="active" @change="varttabChange">
      <van-tab title="强制保险"></van-tab>
      <van-tab title="商业保险"></van-tab>
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
        <template #footer>
          <van-button size="mini">修改</van-button>
        </template>
      </van-card>
      <template #right>
        <van-button
          square
          text="删除"
          type="danger"
          class="delete-button"
          @click="deleteitem(item._id)"
        />
      </template>
    </van-swipe-cell>
    <van-button color="red" plain @click="showPopup">新增保险</van-button>
    <van-popup
      v-model="show"
      closeable
      close-icon-position="top-left"
      position="bottom"
      :style="{ height: '70%' }"
    >
      <van-cell-group style="margin-top:1rem">
        <van-field v-model="title" label="标题" placeholder="请输入标题" />
        <van-field v-model="introduction" label="描述" placeholder="请输入描述" />
        <van-field v-model="labname" label="标签" placeholder="请输入标签" />
        <van-field v-model="insurancenumber" label="数量" type="number" placeholder="请输入数量" />
        <van-field v-model="insuranceprice" label="价钱" type="number" placeholder="请输入价钱" />
      </van-cell-group>
      <van-button color="red" plain @click="addinsurance">新增保险</van-button>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0, //0为强制保险1为商业保险
      show: false,
      title: "",
      introduction: "",
      labname: "",
      insurancenumber: 0,
      insuranceprice: 0,
      datalist: []
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    addinsurance() {
      let args = {
        title: this.title,
        introduction: this.introduction,
        labname: this.labname,
        insurancenumber: this.insurancenumber,
        insuranceprice: this.insuranceprice,
        type: this.active
      };
      this.$axios
        .get("http://localhost:8088/api/insurance/createsurance", {
          params: args
        })
        .then(res => {
          console.log(res);
          this.$toast("添加成功");
          this.show = false;
          this.getinsuranceList();
        });
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
    deleteitem(_itemid) {
      this.$axios
        .get("http://localhost:8088/api/insurance/deletesurance", {
          params: {
            _id: _itemid
          }
        })
        .then(res => {
          console.log(res, "请求成功");
          if (res.status == 200) {
            this.$toast("删除成功");
            this.getinsuranceList();
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
<style>
.goods-card {
  margin: 0;
  background-color: #fff;
}

.delete-button {
  height: 100%;
}
</style>