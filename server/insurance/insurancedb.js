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
})


var insuranceModel = new mongoose.Schema({
    title: String,
    introduction: String,
    labname: String,
    insurancenumber: Number,
    insuranceprice: Number,
    type: Number, //保险类型0为强险1为商业险
}, {
    versionKey: false //去除： - -v
})

var insuranceModel = mongoose.model("insurancelist", insuranceModel, "insurancelist");


module.exports = {
    insuranceModel: insuranceModel
}