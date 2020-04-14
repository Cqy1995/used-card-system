// 可能是我的node版本问题，不用严格模式使用ES6语法会报错
"use strict";
const models = require('./shoppingCardb');
const express = require('express');
const router = express.Router();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/
//获取
router.get('/api/getShopCar', async(req, res) => {
    // 通过模型去查找数据库
    let ret = await models.shopcarModel.find();
    res.send(ret);
});
router.get('/api/delShopCar', async(req, res) => {
    models.shopcarModel.remove({ pinpai: req.query.pinpai })
        .then((data) => {
            res.send({ err: 0, msg: 'del ok', data: null })
        })
        .catch((err) => {
            res.send({ err: -1, msg: err._message, data: null })
        })
});
router.get('/api/yylist/createcar', async(req, res) => {
    let shopcarlist = [{
        id: 1,
        pinpai: '哈弗H6',
        color: '蓝色',
        year: "2017/06",
        leixing: 'SUV',
        yuanjia: "10.5万",
        decs: '2016款 蓝标 1.5T自动两驱精英型',
        xianjia: '6.79万',
        imgUrl: "http://e.hiphotos.baidu.com/image/h%3D300/sign=cd92f6ddf903738dc14a0a22831ab073/08f790529822720e78606b8774cb0a46f21fab25.jpg"
    }]
    models.shopcarModel.insertMany(shopcarlist, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }

    })
});

module.exports = router;