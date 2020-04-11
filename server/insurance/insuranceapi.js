// 可能是我的node版本问题，不用严格模式使用ES6语法会报错
"use strict";
const models = require('./insurancedb');
const express = require('express');
const router = express.Router();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

router.get('/api/insurance/getsurance', async(req, res) => {
    let ret = await models.insuranceModel.find({ "type": req.query.type });
    res.send(ret);
});
router.get('/api/insurance/createsurance', (req, res) => {
    let insuranceList = {
        title: req.query.title,
        introduction: req.query.introduction, //描述
        labname: req.query.labname, //标签
        insurancenumber: req.query.insurancenumber, //保险数量
        insuranceprice: req.query.insuranceprice, //价钱
        type: req.query.type //保险类型
    }
    models.insuranceModel.insertMany(insuranceList, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
});
router.get('/api/insurance/deletesurance', (req, res) => {
    models.insuranceModel.remove({ _id: req.query._id })
        .then((data) => {
            res.send({ errcode: 1, msg: 'del ok', data: null })
        })
        .catch((err) => {
            res.send({ errcode: -1, msg: err._message, data: null })
        })
})
module.exports = router;