//引入express
const express = require('express');

//路由实例
const router = express.Router();

//引入services层
const {
    insertUpdateGoods,
    queryGoodsList,
    queryGoodsBaseInfo,
    insertGoodDetails,
    queryGoodDetails,
    deleteGood
} = require('../services/goodsServices');

/**
 * @api {post} http://129.204.229.240:10086/api/good/insertGoods 添加修改商品
 * @apiDescription 添加商品
 * @apiName good-options
 * @apiGroup good
 * @apiParam (body) {String} name 商品名称
 * @apiParam (body) {String} img 商品图片地址
 * @apiParam (body) {Decimal128} price 商品价格
 * @apiParam (body) {String} cate 品类code
 * @apiParam (body) {Number} status 商品状态(0:未上架 1:已上架 default:0)
 * @apiParam (body) {Array} attribute 商品属性
 * @apiParam (body) {String} remark 商品备注描述
 * 
 * @apiSuccess {Number} code 错误状态码.
 * @apiSuccess {String} msg  错误消息.
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "code" : "0",
 *      "msg" : "ok"
 * 
 *  }
 * @apiSampleRequest http://129.204.229.240:10086/api/good/insertGoods
 * @apiVersion 1.0.0
 */
router.post('/insertGoods', insertUpdateGoods);

/**
 * @api {get} http://129.204.229.240:10086/api/good/queryGoodsList 查询商品列表
 * @apiDescription 查询商品列表
 * @apiName good-query
 * @apiGroup good
 * @apiParam (parmas) {Number} pageNum 第几页
 * @apiParam (parmas) {Number} pageSize 页容量
 * @apiParam (parmas) {String} name 商品名称
 * @apiParam (parmas) {String} cate 商品品类
 * @apiParam (parmas) {Date} startDate 开始时间
 * @apiParam (parmas) {Date} endDate 结束时间
 *
 * @apiSuccess {Number} code 错误状态码.
 * @apiSuccess {String} msg  错误消息.
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "code" : "0",
 *      "msg" : "ok"
 * 
 *  }
 * @apiSampleRequest http://129.204.229.240:10086/api/good/queryGoodsList
 * @apiVersion 1.0.0
 */
router.get('/queryGoodsList', queryGoodsList);


/**
 * @api {get} http://129.204.229.240:10086/api/good/queryGoodsBaseInfo 查询商品基础信息
 * @apiDescription 查询商品基础信息
 * @apiName goodbaseInfo-query
 * @apiGroup good
 * @apiParam (parmas) {Number} id 商品id
 *
 * @apiSuccess {Number} code 错误状态码.
 * @apiSuccess {String} msg  错误消息.
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "code" : "0",
 *      "msg" : "ok"
 * 
 *  }
 * @apiSampleRequest http://129.204.229.240:10086/api/good/queryGoodsBaseInfo
 * @apiVersion 1.0.0
 */
router.get('/queryGoodsBaseInfo', queryGoodsBaseInfo);

/**
 * @api {post} http://129.204.229.240:10086/api/good/deleteGood 删除商品信息
 * @apiDescription 删除商品信息
 * @apiName good-delete
 * @apiGroup good
 * @apiParam (body) {String} id 商品Id
 * @apiSuccess {Number} code 错误状态码.
 * @apiSuccess {String} msg  错误消息.
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "code" : "0",
 *      "msg" : "ok"
 * 
 *  }
 * @apiSampleRequest http://129.204.229.240:10086/api/good/deleteGood
 * @apiVersion 1.0.0
 */
router.post('/deleteGood', deleteGood);

//添加商品详情
router.post('/insertGoodDetails', insertGoodDetails);

//查看商品详情
router.get('/queryGoodDetails', queryGoodDetails);

//暴露路由实例
module.exports = router;