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


var yyModel = new mongoose.Schema({
    id: Number,
    username: String,
    phone: String,
    yytime: String,
    sqtime: String,
}, {
    versionKey: false //去除： - -v
})

var yyModel = mongoose.model("yylist", yyModel, "yylist");


module.exports = {
    yyModel: yyModel
}