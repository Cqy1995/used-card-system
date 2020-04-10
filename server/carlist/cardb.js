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
    carModel: carModel
}