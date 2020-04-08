<template>
  <div class="oldcarmsg">
    <van-nav-bar title="二手车分类管理" @click-left="onClickLeft" left-arrow />
    <van-tree-select
      :items="items"
      :main-active-index="mainActiveIndex"
      :active-id="activeId"
      @click-nav="onClickNav"
      @click-item="onClickItem"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "奔驰",
          children: [
            {
              // 名称
              text: "奔驰400",
              // id，作为匹配选中状态的标识符
              id: 1
              // 禁用选项
            },
            {
              text: "奔驰500",
              id: 2
            }
          ]
        },
        { text: "宝马" },
        { text: "劳斯莱斯" },
        { text: "兰博基尼" },
        { text: "奥迪" }
      ],
      mainActiveIndex: 0,
      activeId: 1
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/");
    },
    onClickNav(index) {
      console.log(index);
      this.mainActiveIndex = index;
    },

    onClickItem(event) {
      console.log(event);
      this.$router.push("/carlist");
      this.activeId = event.id;
      this.$router.push("/carlist");
    }
  },
  mounted() {
    this.$axios
      .get("http://localhost:8088/api/carlist/getcarlist", {
        params: {
          typeid: 1
        }
      })
      .then(res => {
        console.log(res);
      });
  }
};
</script>

<style>
</style>