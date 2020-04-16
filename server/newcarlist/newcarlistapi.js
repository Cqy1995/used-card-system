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

module.exports = router;