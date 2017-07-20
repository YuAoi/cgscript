// const fs = require('fs')
// const path = require('path')
const router = require('koa-router')()
const package = require('../package')

router.get('/', async (ctx, next) => {
  // koa-static处于middleware靠前的未知，代理到index.html
  // await new Promise((resolve, reject) => {
  //   fs.readFile(path.resolve(__dirname, '../public/index.html'), {encoding: 'utf8'}, (error, data) => {
  //     if (error) reject(error)
  //     ctx.body = data
  //     resolve()
  //   })
  // })
})

router.get('/version', async (ctx, next) => {
  ctx.body = {
    version: package.version,
    name: package.name
  }
})

module.exports = router
