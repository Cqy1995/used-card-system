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


var orderModel = new mongoose.Schema({
    imgurl: String,
    carname: String,
    price: String,
    color: String,
    ordertime: String,
    orderno: String
}, {
    versionKey: false //去除： - -v
})

var orderModel = mongoose.model("orderlist", orderModel, "orderlist");

module.exports = {
    orderModel: orderModel
}