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


var shopcarModel = new mongoose.Schema({
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

var shopcarModel = mongoose.model("shopcarlist", shopcarModel, "shopcarlist");
shopcarlist = [{
        id: 1,
        pinpai: '哈弗H6',
        color: '蓝色',
        year: "2017/06",
        leixing: 'SUV',
        yuanjia: "10.5万",
        decs: '2016款 蓝标 1.5T自动两驱精英型',
        xianjia: '6.79万',
        imgUrl: "http://e.hiphotos.baidu.com/image/h%3D300/sign=cd92f6ddf903738dc14a0a22831ab073/08f790529822720e78606b8774cb0a46f21fab25.jpg"
    }, ],
    shopcarModel.insertMany(shopcarlist, function(err, result) {
        if (err) {
            throw err;
        }
    })

module.exports = {
    shopcarModel: shopcarModel
}