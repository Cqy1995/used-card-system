<template>
  <div class="shoppingcar">
    <van-nav-bar title="购物车" @click-left="onClickLeft" left-arrow />
    <div v-show="showTime">
      <van-contact-card
        :type="cardType"
        :name="currentContact.name"
        :tel="currentContact.tel"
        @click="showList = true"
      />

      <!-- 联系人列表 -->
      <van-popup v-model="showList" position="bottom">
        <van-contact-list
          v-model="chosenContactId"
          :list="list"
          @add="onAdd"
          @edit="onEdit"
          @select="onSelect"
        />
      </van-popup>

      <!-- 联系人编辑 -->
      <van-popup v-model="showEdit" position="bottom">
        <van-contact-edit
          :contact-info="editingContact"
          :is-edit="isEdit"
          @save="onSave"
          @delete="onDelete"
        />
      </van-popup>
      <van-card
        :price="shopcarList.xianjia"
        :desc="shopcarList.decs"
        :title="shopcarList.pinpai"
        :thumb="shopcarList.imgUrl"
        :origin-price="shopcarList.yuanjia"
      >
        <template #bottom>
          <van-stepper v-model="values" @plus="addorder" @minus="jsorder" />
          <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
          </van-dropdown-menu>
        </template>
        <template #footer>
          <van-button size="mini" @click="Todel(shopcarList.pinpai)">删除</van-button>
        </template>
      </van-card>
    </div>
    <van-submit-bar :price="totalPrice" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      values: 1,
      value: "",
      shopcarList: "",
      chosenContactId: null,
      editingContact: {},
      showList: false,
      showEdit: false,
      isEdit: false,
      list: [
        {
          name: "张三",
          tel: "13000000000",
          id: 0
        }
      ],
      totalPrice: 0,
      showTime: true,
      value1: 0,
      option1: [
        { text: "白色", value: 0 },
        { text: "黑色", value: 1 },
        { text: "棕色", value: 2 },
        { text: "蓝色", value: 3 }
      ],
      totalPrice1: ""
    };
  },
  computed: {
    cardType() {
      return this.chosenContactId !== null ? "edit" : "add";
    },

    currentContact() {
      const id = this.chosenContactId;
      return id !== null ? this.list.filter(item => item.id === id)[0] : {};
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.$axios.get("http://localhost:8088/api/getShopCar").then(res => {
        this.shopcarList = res.data[0];
        this.totalPrice =
          parseFloat(res.data[0].xianjia) * 1000000 * this.values;
        this.totalPrice1 =
          parseFloat(res.data[0].xianjia) * 1000000 * this.values;
      });
    },
    // 添加联系人
    onAdd() {
      this.editingContact = { id: this.list.length };
      this.isEdit = false;
      this.showEdit = true;
    },

    // 编辑联系人
    onEdit(item) {
      this.isEdit = true;
      this.showEdit = true;
      this.editingContact = item;
    },

    // 选中联系人
    onSelect() {
      this.showList = false;
    },

    // 保存联系人
    onSave(info) {
      this.showEdit = false;
      this.showList = false;

      if (this.isEdit) {
        this.list = this.list.map(item => (item.id === info.id ? info : item));
      } else {
        this.list.push(info);
      }
      this.chosenContactId = info.id;
    },

    // 删除联系人
    onDelete(info) {
      this.showEdit = false;
      this.list = this.list.filter(item => item.id !== info.id);
      if (this.chosenContactId === info.id) {
        this.chosenContactId = null;
      }
      // pinpai
    },
    onClickLeft() {
      this.$router.push("/home");
    },
    showPopup() {
      this.$router.push("/serviceManagent/insuranceDetail");
    },
    Toedit(a) {
      this.$toast("改变颜色");
    },
    Todel(a) {
      this.$axios
        .get("http://localhost:8088/api/delShopCar", {
          params: {
            pinpai: a
          }
        })
        .then(res => {
          console.log(res);
          this.init();
          this.totalPrice = 0;
          this.showTime = false;
        });
      // this.carList.splice(a, 1);
    },
    addorder() {
      this.totalPrice = this.totalPrice1 * (parseInt(this.values) + 1);
    },
    jsorder() {
      console.log(parseInt(this.values) - 1);
      this.totalPrice = this.totalPrice1 * (parseInt(this.values) - 1);
    },
    onSubmit() {
      // this.$router.push("/user");
      var day2 = new Date();
      day2.setTime(day2.getTime());
      var s2 =
        day2.getFullYear() + "-" + (day2.getMonth() + 1) + "-" + day2.getDate();
      var cd = parseInt(Math.random() * (999999 - 100000) + 100000);
      console.log(cd);

      let params = {
        imgurl: this.shopcarList.imgUrl,
        carname: this.shopcarList.pinpai,
        price: this.shopcarList.xianjia,
        color: this.value1,
        ordertime: s2,
        orderno: cd
      };
      this.$axios
        .get("http://localhost:8088/api/orderlist/addorder", {
          params: {
            imgurl: this.shopcarList.imgUrl,
            carname: this.shopcarList.pinpai,
            price: this.shopcarList.xianjia,
            color: this.value1,
            ordertime: s2,
            orderno: cd
          }
        })
        .then(res => {
          this.$toast("订单提交成功");
          this.$router.push("/user");
        });
      console.log(params);
    }
  }
};
</script>

<style lang="scss">
.shoppingcar {
  .van-card__content {
    text-align: left;
    margin-left: 0.2rem;
  }
  .van-card__origin-price {
    margin-right: 50px;
  }
  .van-stepper {
    width: 50%;
    display: inline-block;
  }
  .van-dropdown-menu {
    width: 50%;
    display: inline-block;
    .van-dropdown-menu__item {
      height: 50px;
    }
  }
}
</style>