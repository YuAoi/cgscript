const config = require('../config/config')
const jwt = require('jsonwebtoken')
//检查token是否过期
module.exports = async ( ctx, next ) => {
  const authorization = ctx.get('Authorization')
  if (authorization === '') {
    ctx.throw(401, `no token detected in http header ${Authorization}`)
  }
  const token = authorization
  let tokenContent
  try {
    tokenContent = await jwt.verify(token, config.tokenPrivateKey)     //如果token过期或验证失败，将抛出错误
  } catch (err) {
    ctx.throw(401, 'invalid token')
  }
  await next()
}
