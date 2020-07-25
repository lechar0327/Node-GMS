//引入express
const express = require('express');
//路由实例
const router = express.Router();
const { insertUser, login } = require('../services/userServices');


router.post('/insertUser', insertUser);
/**
 * @api {get} http://129.204.229.240:10086/api/user/login 登录即注册
 * @apiDescription 登录即注册(推荐使用此接口)
 * @apiName user-login
 * @apiGroup user
 * @apiParam (parmas) {String} username 用户名
 * @apiParam (parmas) {String} pwd 密码
 *
 * @apiSuccess {Number} code 错误状态码.
 * @apiSuccess {String} msg  错误消息.
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "code" : "0",
 *      "msg" : "ok",
 *      "token":
 * 
 *  }
 * @apiSampleRequest http://129.204.229.240:10086/api/user/login
 * @apiVersion 1.0.0
 */
router.get('/login', login);


//暴露路由实例
module.exports = router;