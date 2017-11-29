var fs = require('fs');
var express = require('express');
var router = express.Router();
var User = require('../models/userModel');

var app = express();

router.post('/list', query);
router.post('/add', add);
router.post('/update', update);
router.post('/delete', deleteInfo);

var errMsg = { ret: 0, msg: '查询失败！' };
var sucMsg = { ret: 1, msg: '查询成功！' };

function query(req, res) {
    var username = req.body.username || '';
    User.find(function (err, docs) {
        // console.log(docs + '66666666666');
        if (err) {
            return res.send(errMsg);
        } else {
            User.count(function (err, count) {
                if (err) {
                    return res.send(errMsg);
                }
                return res.send({
                    ret: 1,
                    count: count,
                    datas: docs,
                    msg: '查询成功！'
                });
            });
        }
    })
}

function add(req, res) {
    console.log(req.body);
    User.create(req.body,function(err,docs){
        if(err){
            console.log('ERR'+err);
            return res.send(errMsg);
        }
        console.log('SUCC'+docs);
        return res.send({
            ret: 1,
            id: docs.id,
            msg: '添加成功！'
        });
    });
}

function update(req, res) {
    console.log('update id'+req.body.id);
    User.findByIdAndUpdate(req.body.id,req.body,function(err,docs){
        if(err){
            console.log('ERR'+err);
            return res.send(errMsg);
        }
        console.log('SUCC'+docs);
        return res.send({
            ret: 1,
            msg: '修改成功！'
        });

    });
}
function deleteInfo(req, res) {
    console.log('delete id'+req.body.id);
    User.findByIdAndRemove(req.body.id,function(err,docs){
        if(err){
            console.log('ERR'+err);
            return res.send(errMsg);
        }
        console.log('SUCC'+docs);
        return res.send({
            ret: 1,
            msg: '删除成功！'
        });
    });
}
/**
 * 插入
 */
function insert() {

    var user = new User({
        area: "蜀山区",
        city: "合肥",
        flag: 1,
        username: 'user',
        password: "123",
        name: "李刚",
        sex: "1",
        duties: "String",
        tel: "13088532653",
        email: "772984752@163.com",
        role: "ADMIN",
        addr: 'hutongjiexxxx'
    });

    user.save(function (err, res) {

        if (err) {
            console.log("Error:" + err);
        } else {
            console.log("Res:" + res);
        }

    });
}

// insert();


module.exports = router;