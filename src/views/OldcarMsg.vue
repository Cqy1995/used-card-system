<template>
  <div class="oldcarmsg">
    <van-nav-bar :title="tit" @click-left="onClickLeft" left-arrow />
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
      tit: "",
      items: [],
      mainActiveIndex: 0,
      activeId: 0
    };
  },
  mounted() {
    this.init();
    this.activeId = 1;
    this.items = [];
    if (this.$route.params.id == "a") {
      this.tit = "二手车分类管理";
      this.items = [
        {
          text: "越野车",
          children: [
            {
              text: "吉普车",
              id: 1
            },
            {
              text: "林肯",
              id: 2
            }
          ]
        },
        {
          text: "商务车",
          children: [
            {
              text: "凯迪拉克",
              id: 1
            },
            {
              text: "大众",
              id: 2
            }
          ]
        },
        {
          text: "客车",
          children: [
            {
              text: "特斯拉",
              id: 1
            },
            {
              text: "大巴",
              id: 2
            }
          ]
        }
      ];
    } else if (this.$route.params.id == "b") {
      this.tit = "二手车品牌管理";
      this.items = [
        {
          text: "奔驰",
          children: [
            {
              text: "奔驰c300",
              id: 1
            },
            {
              text: "奔驰c400",
              id: 2
            }
          ]
        },
        {
          text: "宝马",
          children: [
            {
              text: "宝马X5",
              id: 1
            },
            {
              text: "宝马X6",
              id: 2
            }
          ]
        },
        {
          text: "劳斯莱斯",
          children: [
            {
              text: "劳斯莱斯1000",
              id: 1
            },
            {
              text: "劳斯莱斯2000",
              id: 2
            }
          ]
        },
        {
          text: "兰博基尼",
          children: [
            {
              // 名称
              text: "兰博基尼蝙蝠",
              id: 1
            },
            {
              text: "兰博基尼蜘蛛",
              id: 2
            }
          ]
        },
        {
          text: "奥迪",
          children: [
            {
              text: "奥迪A6",
              id: 1
            },
            {
              text: "奥迪A8",
              id: 2
            }
          ]
        }
      ];
    } else if (this.$route.params.id == "c") {
      this.tit = "二手车颜色管理";
      this.items = [
        {
          text: "红色",
          children: [
            {
              text: "JEEP",
              id: 1
            },
            {
              text: "福特",
              id: 2
            }
          ]
        },
        {
          text: "黑色",
          children: [
            {
              text: "长城",
              id: 1
            },
            {
              text: "凯美瑞",
              id: 2
            }
          ]
        },
        {
          text: "白色",
          children: [
            {
              text: "丰田",
              id: 1
            },
            {
              text: "宝马",
              id: 2
            }
          ]
        }
      ];
    } else if (this.$route.params.id == "d") {
      this.tit = "二手车车辆管理";
      this.items = [
        {
          text: "奔驰",
          children: [
            {
              text: "奔驰c300",
              id: 1
            },
            {
              text: "奔驰c400",
              id: 2
            }
          ]
        },
        {
          text: "宝马",
          children: [
            {
              text: "宝马X5",
              id: 1
            },
            {
              text: "宝马X6",
              id: 2
            }
          ]
        },
        {
          text: "劳斯莱斯",
          children: [
            {
              text: "劳斯莱斯1000",
              id: 1
            },
            {
              text: "劳斯莱斯2000",
              id: 2
            }
          ]
        },
        {
          text: "兰博基尼",
          children: [
            {
              // 名称
              text: "兰博基尼蝙蝠",
              id: 1
            },
            {
              text: "兰博基尼蜘蛛",
              id: 2
            }
          ]
        },
        {
          text: "奥迪",
          children: [
            {
              text: "奥迪A6",
              id: 1
            },
            {
              text: "奥迪A8",
              id: 2
            }
          ]
        }
      ];
    }
  },
  methods: {
    onClickLeft() {
      this.$router.push("/home");
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
    },
    init() {
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
  }
};
</script>

<style>
</style>