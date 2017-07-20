const router = require('koa-router')()
const UserController = require('../controllers/user')

//checkToken作为中间件存在，验证token有效性
const checkToken = require('../token/checkToken')
// router.prefix('/user')

router.post('/register', UserController.Reg)
router.post('/login', UserController.Login)

router.get('/users', checkToken, UserController.GetAllUsers)
router.post('/deluser', checkToken, UserController.DelUser)

module.exports = router
