<template>
  <div class="shoppingcar">
    <van-nav-bar title="购物车" @click-left="onClickLeft" left-arrow />
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
     v-show="showTime"
        :price="shopcarList.xianjia"
        :desc="shopcarList.decs"
        :title="shopcarList.pinpai"
        :thumb="shopcarList.imgUrl"
        :origin-price="shopcarList.yuanjia"
    >
    <template #bottom>
      <van-stepper v-model="values" />
      </template>
      <template #footer>
        <van-button size="mini" @click="Todel(shopcarList.pinpai)">删除</van-button>
      </template>
    </van-card>
    <van-submit-bar :price="totalPrice" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      values: "",
      value: "",
      shopcarList: "",
      chosenContactId: null,
      editingContact: {},
      showList: false,
      showEdit: false,
      isEdit: false,
      list: [
        {
          name: '张三',
          tel: '13000000000',
          id: 0,
        },
      ],
      totalPrice: "",
      showTime: true
    };
  },
  computed: {
    cardType() {
      return this.chosenContactId !== null ? 'edit' : 'add';
    },

    currentContact() {
      const id = this.chosenContactId;
      return id !== null ? this.list.filter((item) => item.id === id)[0] : {};
    },
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.$axios.get("http://localhost:8088/api/getShopCar").then(res => {
        this.shopcarList = res.data[0];
        this.totalPrice = parseFloat(res.data[0].xianjia)*1000000 
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
        this.list = this.list.map((item) =>
          item.id === info.id ? info : item
        );
      } else {
        this.list.push(info);
      }
      this.chosenContactId = info.id;
    },

    // 删除联系人
    onDelete(info) {
      this.showEdit = false;
      this.list = this.list.filter((item) => item.id !== info.id);
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
          .get("http://localhost:8088/api/delShopCar",{
            params: {
              pinpai: a
            }
          }).then(res => {
            console.log(res);
            this.init()
            this.totalPrice = 0
            this.showTime = false
          })
      // this.carList.splice(a, 1);
    },
    onSubmit() {
      this.$router.push("/user");
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
}
</style>