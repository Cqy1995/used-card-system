// 引入编写好的api
const api = require('./api');
const carapi = require('./carlist/carapi');
const insuranceapi = require('./insurance/insuranceapi'); //保险
const yyapi = require('./yylist/yyapi');
const shoppcar = require('./shoppingCar/shoppingCarapi');
const tongzhi = require('./tongzhi/tongzhiapi'); //通知
const tousu = require('./tousu/tousuapi'); //投诉
const kanjia = require('./kanjia/kanjiaapi'); //砍价
// 引入文件模块
const fs = require('fs');
// 引入处理路径的模块
const path = require('path');
// 引入处理post数据的模块
const bodyParser = require('body-parser')
    // 引入Express
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors({
    origin: ['http://localhost:8080'],
    methods: ['GET', 'POST'],
}));
//跨域问题解决方案
app.all('*', function(req, res, next) {
        res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
        next();
    })
    // 访问静态资源文件 这里是访问所有dist目录下的静态资源文件
app.use(express.static(path.resolve(__dirname, '../dist')))
    // 因为是单页应用 所有请求都走/dist/index.html
app.get('/', function(req, res) {
    const html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8')
    res.send(html)
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(api);
app.use(carapi);
app.use(insuranceapi); //保险
app.use(yyapi);
app.use(shoppcar);
app.use(tongzhi); //通知
app.use(tousu); //投诉
app.use(kanjia); //砍价


// 监听8088端口
app.listen(8088);
console.log('success listen…………');