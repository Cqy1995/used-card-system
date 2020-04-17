// 可能是我的node版本问题，不用严格模式使用ES6语法会报错
"use strict";
const models = require('./consoultmsgdb');
const express = require('express');
const router = express.Router();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/
//获取
router.get('/api/getconsoult', async(req, res) => {
    // 通过模型去查找数据库
    let ret = await models.consoultModel.find();
    res.send(ret);
});

router.get('/api/addconsoult', async(req, res) => {
    let consoultlist = [{
        id: 1,
        consoult: req.query.consoult,
    }]
    models.consoultModel.insertMany(consoultlist, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }

    })
});
// 删除用户
router.get('/api/delconsoult', (req, res) => {
    models.consoultModel.remove({ _id: req.query._id })
        .then((data) => {
            res.send({ err: 0, msg: 'del ok', data: null })
        })
        .catch((err) => {
            res.send({ err: -1, msg: err._message, data: null })
        })
})
module.exports = router;