// 可能是我的node版本问题，不用严格模式使用ES6语法会报错
"use strict";
const models = require('./kanjiadb');
const express = require('express');
const router = express.Router();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

router.get('/api/kanjia/getkanjialist', async(req, res) => {
    let ret = await models.kanjiaModel.find();
    res.send(ret);
})

router.get('/api/kanjia/createkanjia', async(req, res) => {
    let kanjiaList = [{
        phone: req.query.phone, //用户电话
        pingpai: req.query.pingpai, //车辆品牌
        xinghao: req.query.xinghao, //车辆型号
        color: req.query.color, //车辆颜色
        money: req.query.money, //车辆售价
        kmoney: req.query.kmoney, //砍价
    }]
    models.kanjiaModel.insertMany(kanjiaList, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }

    })
});

module.exports = router;