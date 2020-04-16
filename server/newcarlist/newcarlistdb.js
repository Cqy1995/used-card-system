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


var newcarModel = new mongoose.Schema({
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

var newcarModel = mongoose.model("newcarlist", newcarModel, "newcarlist");
newcarlist = [{
            id: 1,
            pinpai: '哈弗H6',
            color: '蓝色',
            year: "2017/04",
            leixing: 'SUV',
            yuanjia: "10.5",
            decs: '2016款 蓝标 1.5T自动两驱精英型',
            xianjia: '6.79',
            imgUrl: "http://e.hiphotos.baidu.com/image/h%3D300/sign=cd92f6ddf903738dc14a0a22831ab073/08f790529822720e78606b8774cb0a46f21fab25.jpg"
        },
        {
            id: 2,
            pinpai: '力帆轩朗',
            color: '棕色',
            year: "2017/05",
            leixing: '轿车',
            yuanjia: "10.5",
            decs: '2017款 蓝标 1.5T自动舒适型',
            xianjia: '5.5',
            imgUrl: "http://img4.imgtn.bdimg.com/it/u=3331455421,259079271&fm=26&gp=0.jpg"
        },
        {
            id: 3,
            pinpai: '大众夏朗',
            color: '白色',
            year: "2017/06",
            leixing: '轿车',
            yuanjia: "10.5",
            decs: '2013款 蓝标 1.8TSI标配型',
            xianjia: '6.6',
            imgUrl: "http://img4.imgtn.bdimg.com/it/u=2388327870,2514168806&fm=26&gp=0.jpg"
        },
        {
            id: 4,
            pinpai: '本田',
            color: '白色',
            year: "2017/07",
            leixing: '轿车',
            yuanjia: "10.5",
            decs: '2013款 十周年纪念1.8L 自动舒适型',
            xianjia: '7.15',
            imgUrl: "http://img2.imgtn.bdimg.com/it/u=1049448224,746375016&fm=26&gp=0.jpg"
        },
        {
            id: 5,
            pinpai: '奇瑞',
            color: '白色',
            year: "2017/08",
            leixing: '轿车',
            yuanjia: "10.5",
            decs: '2018款 1.5L 手动精英版',
            xianjia: '3.15',
            imgUrl: "http://b.hiphotos.baidu.com/image/h%3D300/sign=553ef07d35292df588c3aa158c305ce2/9345d688d43f879465127d7cdd1b0ef41ad53af6.jpg"
        }
    ],
    newcarModel.insertMany(newcarlist, function(err, result) {
        if (err) {
            throw err;
        }
    })

module.exports = {
    newcarModel: newcarModel
}