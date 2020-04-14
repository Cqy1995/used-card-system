const mongoose = require('mongoose'); //引用数据库
mongoose.connect('mongodb://localhost:27017/students'); //数据库连接
//定义数据格式
const db = mongoose.connection;
db.on('open', function(err) {
    if (err) {
        throw err;
    }
})


var tousuModel = new mongoose.Schema({
    danhao: String, //订单号
    tscontent: String, //投诉内容
    tstime: String, //投诉时间
    user: String, //投诉人
    fbtime: String //发布时间
}, {
    versionKey: false //去除： - -v
})

var tousuModel = mongoose.model("tousu", tousuModel, "tousu");


module.exports = {
    tousuModel: tousuModel
}