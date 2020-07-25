//引入express
const express = require('express');

//路由实例
const router = express.Router();

const { insertMenu, queryMenu } = require('../services/menuServices');

/**
 * @api {post} http://10.36.147.178:3000/api/menu/insertMenu 添加菜单
 * @apiDescription 添加菜单
 * @apiName menu-insert
 * @apiGroup menu
 * @apiParam (body) {String} text 菜单名称
 * @apiParam (body) {String} path 跳转路径
 * @apiParam (body) {String} icon 图标
 * @apiParam (body) {String} component 组件名
 * @apiParam (body) {String} parent 父菜单id,默认为0
 *
 * @apiSuccess {Number} code 错误状态码.
 * @apiSuccess {String} msg  错误消息.
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "code" : "0",
 *      "msg" : "创建成功"
 * 
 *  }
 * @apiSampleRequest http://10.36.147.178:3000/api/menu/insertMenu
 * @apiVersion 1.0.0
 */
router.post('/insertMenu', insertMenu);

/**
 * @api {get} http://10.36.147.178:3000/api/menu/queryMenu 菜单查询
 * @apiDescription 菜单查询
 * @apiName menu-query
 * @apiGroup menu
 * @apiParam (parmas) {String} pageNum 第几页
 * @apiParam (parmas) {String} pageSize 页容量
 *
 * @apiSuccess {Number} code 错误状态码.
 * @apiSuccess {String} msg  错误消息.
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "code" : "0",
 *      "msg" : "ok"
 * 
 *  }
 * @apiSampleRequest http://10.36.147.178:3000/api/menu/queryMenu
 * @apiVersion 1.0.0
 */
router.get('/queryMenu', queryMenu);


//暴露路由实例
module.exports = router;