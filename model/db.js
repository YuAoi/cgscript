const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = require('./user')

mongoose.connect('mongodb://10.19.161.122:8336/cgscript', {
  useMongoClient: true
})

mongoose.Promise = global.Promise

const db = mongoose.connection

db.on('error', () => {
  console.log('数据库连接出错！')
})

db.on('open', () => {
  console.log('数据库连接成功！')
})

const model = {
  User: User.Model
}

module.exports = model
