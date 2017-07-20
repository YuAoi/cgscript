const User = require('../model/db').User
const moment = require('moment')
const objectIdToTimestamp = require('objectid-to-timestamp')

const sha1 = require('sha1');
//createToken
const createToken = require('../token/createToken')

/**
 * 根据查询条件查询用户
 * @param  {Object} 查询条件 example: {username: username}
 * @return {Promise}         返回一个Promise实例
 */
const findUser = condition => {
  return new Promise((resolve, reject) => {
    User.findOne(condition, (error, doc) => {
      if (error) reject(err)
      resolve(doc)
    })
  })
}

const delUser = id => {
  return new Promise((resolve, reject) => {
    User.findOneAndRemove({ _id: id }, error => {
      if (error) reject(error)
      console.log('删除用户成功')
      resolve()
    })
  })
}

/**
 * 查询所有用户
 * @return {Promise} Promise实例
 */
const findAllUsers = () => {
  return new Promise((resolve, reject) => {
    User.find({}, (error, doc) => {
      if (error) reject(error)
      resolve(doc)
    })
  })
}

/**
 * 注册
 */
const Reg = async ctx => {
  let user = new User({
    username: ctx.request.body.username,
    password: sha1(ctx.request.body.password),
    token: createToken(this.username)
  })
  // 将objectid转换为用户创建时间
  user.create_time = moment(objectIdToTimestamp(user._id)).format('YYYY-MM-DD HH:mm:ss')

  let doc = await findUser({ username: user.username })

  if (doc) {
    console.log('用户名已经存在')
    ctx.status = 200
    ctx.body = {
      success: false
    }
  } else {
    await new Promise((resolve, reject) => {
      user.save(error => {
        if (error) reject(error)
        resolve()
      })
    })
    console.log('注册成功')
    ctx.status = 200
    ctx.body = {
      success: true
    }
  }
}
/**
 * 登录
 */
const Login = async ctx => {
  let username = ctx.request.body.username
  let password = sha1(ctx.request.body.password)

  let doc = await findUser({ username })

  if (!doc) {
    console.log('检查到用户名不存在')
    ctx.status = 200
    ctx.body = {
      success: false
    }
  } else if (doc.password === password) {
    console.log('密码一致')

    const token = createToken(username)
    
    doc.token = token
    await new Promise((resolve, reject) => {
      doc.save(error => {
        if (error) reject(error)
        resolve()
      })
    })

    ctx.status = 200
    ctx.body = {
      success: true,
      username,
      token,
      create_time: doc.create_time.getTime()
    }
  } else {
    console.log('密码错误！')

    ctx.status = 200
    ctx.body = {
      success: false
    }
  }
}

/**
 * 获得所有用户信息
 */
const GetAllUsers = async ctx => {
  let doc = await findAllUsers()
  ctx.status = 200
  ctx.body = {
    success: true,
    result: doc
  }
}

/**
 * 删除某个用户
 */
const DelUser = async ctx => {
  let id = ctx.request.body.id

  await delUser(id)
  ctx.status = 200
  ctx.body = {
    success: true
  }
}

module.exports = {
  Reg,
  Login,
  GetAllUsers,
  DelUser
}