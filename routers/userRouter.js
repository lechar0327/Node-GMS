//引入express
const express = require('express');
//路由实例
const router = express.Router();
const { insertUser, login } = require('../services/userServices');

/**
 * @api {post} http://10.36.147.178:3000/api/user/insertUser 注册
 * @apiDescription 注册
 * @apiName user-LoginRegister
 * @apiGroup user
 * @apiParam (body) {String} username 用户名
 * @apiParam (body) {String} pwd 密码
 *
 * @apiSuccess {Number} code 错误状态码.
 * @apiSuccess {String} msg  错误消息.
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "code" : "0",
 *      "msg" : "创建成功"
 * 
 *  }
 * @apiSampleRequest http://10.36.147.178:3000/api/user/insertUser
 * @apiVersion 1.0.0
 */
router.post('/insertUser', insertUser);
/**
 * @api {get} http://10.36.147.178:3000/api/user/login 登录即注册
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
 * @apiSampleRequest http://10.36.147.178:3000/api/user/login
 * @apiVersion 1.0.0
 */
router.get('/login', login);


//暴露路由实例
module.exports = router;