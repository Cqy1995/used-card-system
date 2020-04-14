const mongoose = require('mongoose'); //引用数据库
mongoose.connect('mongodb://localhost:27017/students'); //数据库连接
//定义数据格式
const db = mongoose.connection;
db.on('open', function(err) {
    if (err) {
        throw err;
    }
})


var tongzhiModel = new mongoose.Schema({
    xtnews: String, //系统通知
    dznews: String, //打折通知
    cznews: String, //车展通知
    fbuser: String, //发布人
    fbtime: String, //发布时间
    fbtype: Number, //发布的类型
    fbmain: String //发布的内容
}, {
    versionKey: false //去除： - -v
})

var tongzhiModel = mongoose.model("tongzhi", tongzhiModel, "tongzhi");


module.exports = {
    tongzhiModel: tongzhiModel
}