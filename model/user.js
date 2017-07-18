const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: String,
  password: String,
  token: String,
  create_time: Date
})

const userModel = mongoose.model('User', userSchema)

module.exports = {
  Schema: userSchema,
  Model: userModel
}
