const config = require('../config/config')
const jwt = require('jsonwebtoken')

//登录时：核对用户名和密码成功后，应用将用户的id（图中的user_id）作为JWT Payload的一个属性
module.exports = function (user_id, expires_in = '7d') {
  const token = jwt.sign({
    user_id: user_id
  }, config.tokenPrivateKey, {
    expiresIn: expires_in //过期时间设置为7天。那么decode这个token的时候得到的过期时间为 : 创建token的时间 +　设置的值
  })
  return token
}
