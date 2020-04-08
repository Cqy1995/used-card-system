// 可能是我的node版本问题，不用严格模式使用ES6语法会报错
"use strict";
const models = require('./db');
const express = require('express');
const router = express.Router();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 创建账号接口
router.get('/api/login/createAccount', (req, res) => {
    let userList = [{
        nickname: req.query.account,
        password: req.query.password
    }]
    models.userModel.insertMany(userList, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
        console.log("数据添加成功:", result);
    })
});
// 获取已有账号接口
router.get('/api/login/getAccount', async(req, res) => {
    // 通过模型去查找数据库
    // let ret = await models.userModel.find();
    let ret = await models.userModel.findOne({
        nickname: req.query.account
    });

    res.send(ret);
    // models.userModel.find((err, data) => {
    //     if (err) {
    //         res.send(err);
    //     } else {
    //         res.send(data);
    //     }
    // });
});

router.get('/api/carlist/getcarlist', async(req, res) => {
    let ret = await models.carModel.findOne({
        typeId: req.query.typeid
    });
    res.send(ret);
})

router.get('/api/carlist/createAccount', (req, res) => {
    let carList = [{
        typeId: req.query.typeid,
        typeName: req.query.typename
    }]
    let itemarry = await models.carModel.
    models.carModel.insertMany(carList, function(err, result) {
        if (err) {
            res.send(err);
            console.log("数据添加成功:", result);
        } else {
            res.send(result);
        }

    })
});
module.exports = router;