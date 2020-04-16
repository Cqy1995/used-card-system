// 可能是我的node版本问题，不用严格模式使用ES6语法会报错
"use strict";
const models = require('./orderlistdb');
const express = require('express');
const router = express.Router();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/
//获取
router.get('/api/getorder', async(req, res) => {
    // 通过模型去查找数据库
    let ret = await models.orderModel.find();
    res.send(ret);
});
// 添加
router.get('/api/orderlist/addorder', async(req, res) => {
    let orderlist = [{
        imgurl: req.query.imgurl,
        carname: req.query.carname,
        price: req.query.price,
        color: req.query.color,
        ordertime: req.query.ordertime,
        orderno: req.query.orderno,
    }]
    models.orderModel.insertMany(orderlist, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }

    })
});

module.exports = router;