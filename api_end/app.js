var express = require('express');
var app = express();
var db = require('./models/db.js');
var router = require('./router/index');
var user = require('./router/user');
var bodyParser = require('body-parser')

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Content-Type", "application/json;charset=utf-8");
  console.log('aaaaaaaaa');
  next();
});

app.use(bodyParser.urlencoded({
  extended: false
}));

//登陆
app.post('/login', router.login);
//用户信息
app.use('/api/sys_users', user);

app.listen(3000, () => {
  console.log('node server listen port 3000');
});