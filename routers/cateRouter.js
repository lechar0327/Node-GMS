//引入express
const express = require('express');

//路由实例
const router = express.Router();

const { insertCates, queryCates } = require('../services/catesServices');

/**
 * @api {post} http://10.36.147.178:3000/api/good/insertCates 添加品类
 * @apiDescription 添加品类
 * @apiName cate-insertCates
 * @apiGroup cate
 * @apiParam (body) {String} cate 品类code
 * @apiParam (body) {String} cate_zh 品类中文
 *
 * @apiSuccess {Number} code 错误状态码.
 * @apiSuccess {String} msg  错误消息.
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "code" : "0",
 *      "msg" : "创建成功"
 * 
 *  }
 * @apiSampleRequest http://10.36.147.178:3000/api/cate/insertCates
 * @apiVersion 1.0.0
 */
router.post('/insertCates', insertCates);

/**
 * @api {get} http://10.36.147.178:3000/api/cate/queryCates 查询品类
 * @apiDescription 查询品类
 * @apiName cate-query
 * @apiGroup cate
 * @apiParam (parmas) {Number} pageNum 第几页
 * @apiParam (parmas) {Number} pageSize 页容量
 *
 * @apiSuccess {Number} code 错误状态码.
 * @apiSuccess {String} msg  错误消息.
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "code" : "0",
 *      "msg" : "ok"
 * 
 *  }
 * @apiSampleRequest http://10.36.147.178:3000/api/cate/queryCates
 * @apiVersion 1.0.0
 */
router.get('/queryCates', queryCates);

//暴露路由实例
module.exports = router;