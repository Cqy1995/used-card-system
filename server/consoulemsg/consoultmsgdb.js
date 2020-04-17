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


var consoultModel = new mongoose.Schema({
    id: Number,
    consoult: String,
}, {
    versionKey: false //去除： - -v
})

var consoultModel = mongoose.model("consoultlist", consoultModel, "consoultlist");


module.exports = {
    consoultModel: consoultModel
}