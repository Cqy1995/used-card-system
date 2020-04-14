const mongoose = require('mongoose'); //引用数据库
mongoose.connect('mongodb://localhost:27017/students'); //数据库连接
//定义数据格式
const db = mongoose.connection;
db.on('open', function(err) {
    if (err) {
        throw err;
    }
})


var kanjiaModel = new mongoose.Schema({
    phone: Number, //用户电话
    pingpai: String, //车辆品牌
    xinghao: String, //车辆型号
    color: String, //车辆颜色
    money: String, //车辆售价
    kmoney: String, //砍价
}, {
    versionKey: false //去除： - -v
})

var kanjiaModel = mongoose.model("kanjia", kanjiaModel, "kanjian");


module.exports = {
    kanjiaModel: kanjiaModel
}