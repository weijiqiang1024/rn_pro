// mongoose 链接
//
var mongoose = require('mongoose');
//连接相应数据库，在这里连接的是vs_backend数据库
// var db = mongoose.createConnection('mongodb://127.0.0.1:27017/vs_backend');
DB_URL = 'mongodb://127.0.0.1:27017/vs_backend';
mongoose.connect(DB_URL);

/**
 * 连接成功
 */
mongoose.connection.on('connected', function() {
  console.log('Mongoose connection open to ' + DB_URL);
});

/**
 * 连接异常
 */
mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error: ' + err);
});

/**
 * 连接断开
 */
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose connection disconnected');
});

module.exports = mongoose;