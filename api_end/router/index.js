var fs = require('fs');

var User = require('../models/userModel');

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
    addr:'hutongjiexxxx'
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

exports.login = (req, res) => {

  User.find({
    'username': req.body.username
  }, function (err, docs) {

    if (err) {
      return res.send({
        ret: 0,
        msg: '登陆失败！'
      });
    } else {
      if (req.body.password == docs[0].password) {
        let userData = [{
          username: docs[0].username
        }]

        return res.send({
          ret: 1,
          userData: userData,
          msg: '登陆成功！'
        });
      } else {
        return res.send({
          ret: 0,
          msg: '登陆失败！'
        });
      }
    }
  });
}