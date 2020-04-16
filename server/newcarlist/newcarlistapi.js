"use strict";
const models = require('./newcarlistdb');
const express = require('express');
const router = express.Router();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/
//获取
router.get('/api/getCarList', async(req, res) => {
    // 通过模型去查找数据库
    let ret = await models.newcarModel.find();
    res.send(ret);
});
//创建
router.get('/api/createCarList', async(req, res) => {
    let newcarList = {
        id: req.query.id,
        pinpai: req.query.pinpai,
        color: req.query.color,
        year: req.query.year,
        leixing: req.query.leixing,
        yuanjia: req.query.yuanjia,
        xianjia: req.query.xianjia,
        decs: req.query.decs,
        imgUrl: req.query.imgUrl
    }
    models.newcarModel.insertMany(newcarList, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
})
module.exports = router;