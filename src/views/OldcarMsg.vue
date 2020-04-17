<template>
  <div class="oldcarmsg">
    <van-nav-bar :title="tit" @click-left="onClickLeft" left-arrow />
    <van-search
      v-model="values1"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @cancel="onCancel"
    />
    <van-swipe-cell v-for="(item,index) in items">
      <van-cell :border="false" :title="item.text" />
      <template #right>
        <van-button square type="danger" @click="ToDelete(index)">删除</van-button>
        <van-button square type="primary" @click="ToEdit(index)">修改</van-button>
      </template>
    </van-swipe-cell>
    <van-dialog v-model="show" title="管理" show-cancel-button :beforeClose="beforeClose">
      <van-field style="margin:0.5rem auto" v-model="value" placeholder="请输入信息" />
    </van-dialog>
    <!-- <van-tree-select
      :items="items"
      :main-active-index="mainActiveIndex"
      :active-id="activeId"
      @click-nav="onClickNav"
      @click-item="onClickItem"
    />-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      tit: "",
      items: [],
      items2: [],
      mainActiveIndex: 0,
      activeId: 0,
      value: "",
      show: false,
      showIpt: "",
      values1: ""
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
          text: "豪华型",
          children: [
            {
              text: "大型车",
              id: 1
            },
            {
              text: "跑车",
              id: 2
            }
          ]
        },
        {
          text: "热门车型",
          children: [
            {
              text: "SUV",
              id: 1
            },
            {
              text: "紧凑型",
              id: 2
            },
            {
              text: "中型",
              id: 2
            }
          ]
        },
        {
          text: "小型",
          children: [
            {
              text: "小型车",
              id: 1
            },
            {
              text: "MPV",
              id: 2
            }
          ]
        }
      ];
      this.items2 = [
        {
          text: "豪华型",
          children: [
            {
              text: "大型车",
              id: 1
            },
            {
              text: "跑车",
              id: 2
            }
          ]
        },
        {
          text: "热门车型",
          children: [
            {
              text: "SUV",
              id: 1
            },
            {
              text: "紧凑型",
              id: 2
            },
            {
              text: "中型",
              id: 2
            }
          ]
        },
        {
          text: "小型",
          children: [
            {
              text: "小型车",
              id: 1
            },
            {
              text: "MPV",
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
      this.items2 = [
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
      this.items2 = [
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
      this.items2 = [
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
    onSearch(val) {
      if (this.items2.filter(item => item.text == val).length == 0) {
        this.$toast("暂无此数据");
        this.items = [];
      } else {
        this.items = this.items2.filter(item => item.text == val);
      }
    },
    onCancel() {
      this.$toast("取消");
    },
    onClickLeft() {
      this.$router.push("/home");
    },
    onClickNav(index) {
      console.log(index);
      this.mainActiveIndex = index;
    },

    onClickItem(event) {
      this.activeId = event.id;
      this.$router.push(`/carlist?name=${event.text}`);
    },
    ToDelete(a) {
      this.items.splice(a, 1);
    },
    ToEdit(a) {
      this.showIpt = a
      this.show = true;
      // this.items[a].text = this.value
    },
    beforeClose(action, done) {
      if(this.value=="") {
         this.$toast("请输入信息")
         done(false) //不关闭弹框
      }
      if(action === 'confirm') {
        this.items[this.showIpt].text = this.value
          setTimeout(done, 1000)
      } else if(action === 'cancel') {
         done() //关闭
      }
    },
    init() {
      // this.$axios
      //   .get("http://localhost:8088/api/carlist/getcarlist", {
      //     params: {
      //       typeid: 1
      //     }
      //   })
      //   .then(res => {
      //     console.log(res);
      //   });
    }
  }
};
</script>

<style>
.oldcarmsg .van-swipe-cell {
  font-size: 0;
}
</style>