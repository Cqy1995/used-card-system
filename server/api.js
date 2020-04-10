// 可能是我的node版本问题，不用严格模式使用ES6语法会报错
"use strict";
const models = require('./db');
const express = require('express');
const router = express.Router();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 创建账号接口
router.get('/api/login/createAccount', (req, res) => {
    let userList = [{
        id: 1,
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
// 获取用户接口
router.get('/api/login/getUser', async(req, res) => {
    // 通过模型去查找数据库
    // let ret = await models.userModel.find();
    let ret = await models.userModel.findOne({
        id: "1"
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
// 修改
router.get('/api/login/updateAccount', (req, res) => {
    // let userList = [{
    //     nickname: req.query.account,
    //     password: req.query.password
    // }]
    // let { nickname, password } = req.body;
    models.userModel.updateOne({ nickname: req.query.account, password: req.query.password })
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.send(err)
        })
});
// 删除用户
router.get('/api/login/delAccount', (req, res) => {
        models.userModel.remove({ nickname: req.query.account })
            .then((data) => {
                res.send({ err: 0, msg: 'del ok', data: null })
            })
            .catch((err) => {
                res.send({ err: -1, msg: err._message, data: null })
            })
    })
    // 获取推荐商品
router.get('/api/login/getTjShop', async(req, res) => {
    // 通过模型去查找数据库
    let ret = await models.shopModel.find();
    res.send(ret);
});
module.exports = router;