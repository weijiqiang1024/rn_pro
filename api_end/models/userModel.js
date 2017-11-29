// var mongoose = require('mongoose')
var mongoose = require('./db')

var Schema = mongoose.Schema; //  创建模型
var userScheMa = new Schema({
  area: String,
  city: String,
  flag: Number,
  username: String,
  password: String,
  name: String,
  sex: String,
  duties: String,
  tel: String,
  email: String,
  role: String,
  addr:String
}); //  定义了一个新的模型，但是此模式还未和users集合有关联

module.exports = mongoose.model('user', userScheMa, 'user'); //  与users集合关联