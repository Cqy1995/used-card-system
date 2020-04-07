const mongoose = require('mongoose'); //引用数据库
mongoose.connect('mongodb://localhost/data'); //数据库连接
//定义数据格式
//curd.js
const db = mongoose.connection;
db.once('error', () => console.log('Mongo connection error'));
db.once('open', () => console.log('Mongo connection successed'));
/************** 定义模式loginSchema **************/
const loginSchema = mongoose.Schema({
    account: String,
    password: String
});

/************** 定义模型Model **************/
const Models = {
    Login: mongoose.model('Login', loginSchema)
}

module.exports = Models;