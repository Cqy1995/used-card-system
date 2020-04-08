const mongoose = require('mongoose'); //引用数据库
mongoose.connect('mongodb://localhost:27017/students'); //数据库连接
//定义数据格式
//curd.js
const db = mongoose.connection;
db.on('open', function(err) {
    if (err) {
        console.log('数据库连接失败');
        throw err;
    }
    console.log('数据库连接成功')
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


var carModel = new mongoose.Schema({
    general: Number, //0分类管理1品牌管理2颜色管理3车辆管理
    typeId: Number,
    typeName: String,
    item: [{
        itemId: Number,
        itemName: String,
        itemDetail: [{ detailImg: String, detailName: String, detailprice: Number, detailNumber: Number }]
    }],
}, {
    versionKey: false //去除： - -v
})

var carModel = mongoose.model("carlist", carModel, "carlist");


module.exports = {
    userModel: userModel,
    carModel: carModel
}