// 可能是我的node版本问题，不用严格模式使用ES6语法会报错
"use strict";
const models = require('./tongzhidb');
const express = require('express');
const router = express.Router();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

router.get('/api/tongzhi/gettongzhilist', async(req, res) => {
    let ret = await models.tongzhiModel.find({ "fbtype": req.query.fbtype });
    res.send(ret);
})

router.get('/api/tongzhi/createtongzhi', async(req, res) => {
    let tongzhiList = [{
        fbtype: req.query.fbtype, //发布类型
        fbmain: req.query.fbmain, //发布内容
        fbuser: req.query.fbuser, //发布人
        fbtime: req.query.fbtime //发布时间
    }]
    models.tongzhiModel.insertMany(tongzhiList, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
});

module.exports = router;