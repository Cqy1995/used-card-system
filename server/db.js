const mongoose = require('mongoose'); //引用数据库
mongoose.connect('mongodb://localhost:27017/students'); //数据库连接
//定义数据格式
//curd.js
const db = mongoose.connection;
db.on('open', function(err) {
    if (err) {
        throw err;
    }
})

//定义表用户数据结构
var userModel = new mongoose.Schema({
    id: Number,
    nickname: String,
    password: String

}, {
    versionKey: false //去除： - -v
})

// 将表的数据结构和表关联起来
// var productModel=mongoose.model('anyname',表的数据结构，表名)
var userModel = mongoose.model("userList", userModel, "userList");
userList = [{
        id: 3,
        nickname: '管理员1',
        password: '123456'
    }],
    userModel.insertMany(userList, function(err, result) {
        if (err) {
            throw err;
        }
    })
    // 首页推荐商品列表
    // 定义商品数据结构
var shopModel = new mongoose.Schema({
    id: Number,
    pinpai: String,
    color: String,
    year: String,
    leixing: String,
    yuanjia: String,
    xianjia: String,
    decs: String,
    imgUrl: String

}, {
    versionKey: false //去除： - -v
})
var shopModel = mongoose.model("shopList", shopModel, "shopList");
shopList = [{
            id: 1,
            pinpai: '哈弗H6',
            color: '蓝色',
            year: "2017/06",
            leixing: 'SUV',
            yuanjia: "10.5万",
            decs: '2016款 蓝标 1.5T自动两驱精英型',
            xianjia: '6.79万',
            imgUrl: "http://e.hiphotos.baidu.com/image/h%3D300/sign=cd92f6ddf903738dc14a0a22831ab073/08f790529822720e78606b8774cb0a46f21fab25.jpg"
        },
        {
            id: 2,
            pinpai: '力帆轩朗',
            color: '棕色',
            year: "2017/06",
            leixing: 'SUV',
            yuanjia: "10.5万",
            decs: '2017款 蓝标 1.5T自动舒适型',
            xianjia: '5.5万',
            imgUrl: "http://img4.imgtn.bdimg.com/it/u=3331455421,259079271&fm=26&gp=0.jpg"
        },
        {
            id: 3,
            pinpai: '大众夏朗',
            color: '白色',
            year: "2017/06",
            leixing: 'SUV',
            yuanjia: "10.5万",
            decs: '2013款 蓝标 1.8TSI标配型',
            xianjia: '6.6万',
            imgUrl: "http://img4.imgtn.bdimg.com/it/u=2388327870,2514168806&fm=26&gp=0.jpg"
        }
    ],
    shopModel.insertMany(shopList, function(err, result) {
        if (err) {
            throw err;
        }
    })
module.exports = {
    userModel: userModel,
    shopModel: shopModel
}