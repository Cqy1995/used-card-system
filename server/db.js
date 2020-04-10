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
            console.log("数据添加失败");
            throw err;
        }
        console.log("数据添加成功:", result);
    })
    // 首页推荐商品列表
    // 定义商品数据结构
var shopModel = new mongoose.Schema({
    id: Number,
    title: String,
    decs: String,
    price: String,
    imgUrl: String

}, {
    versionKey: false //去除： - -v
})
var shopModel = mongoose.model("shopList", shopModel, "shopList");
shopList = [{
            id: 1,
            title: '哈弗H6',
            decs: '2016款 蓝标 1.5T自动两驱精英型',
            price: '6.79万',
            imgUrl: "http://e.hiphotos.baidu.com/image/h%3D300/sign=cd92f6ddf903738dc14a0a22831ab073/08f790529822720e78606b8774cb0a46f21fab25.jpg"
        },
        {
            id: 2,
            title: '力帆轩朗',
            decs: '2017款 蓝标 1.5T自动舒适型',
            price: '5.5万',
            imgUrl: "http://img4.imgtn.bdimg.com/it/u=3331455421,259079271&fm=26&gp=0.jpg"
        },
        {
            id: 3,
            title: '大众夏朗',
            decs: '2013款 蓝标 1.8TSI标配型',
            price: '6.6万',
            imgUrl: "http://img4.imgtn.bdimg.com/it/u=2388327870,2514168806&fm=26&gp=0.jpg"
        }
    ],
    shopModel.insertMany(shopList, function(err, result) {
        if (err) {
            console.log("数据添加失败");
            throw err;
        }
        console.log("数据添加成功:", result);
    })
module.exports = {
    userModel: userModel,
    shopModel: shopModel
}