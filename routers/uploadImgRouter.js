/**
 * 专门处理文件的路由
 */
//引入express
const express = require('express');

//路由实例
const router = express.Router();

//引入multer组件
const multer = require("multer");
//引入时间插件
var moment = require('moment');
//引入上传图片中间件
const uploadImg = require('../middlewares/uploadImg');

var timestamp = '';
var timepath = moment().format('YYYY-MM-DD');
var destination = '/public/upload/' + timepath;
var filename = '';

var storage = multer.diskStorage({
    //这里destination是一个字符串
    destination: '.' + destination,
    filename: function (req, file, cb){
        //自定义设置文件的名字
        timestamp = new Date().getTime();
        filename = timestamp + '.' + file.originalname.split('.')[1];
        cb(null, filename)
    }
});

//multer的实例
var upload = multer({
    storage: storage
});


/**
 * @api {post} http://10.36.147.178:3000/api/upload 图片上传
 * @apiDescription 图片上传(标签name='file')
 * @apiName img-upload
 * @apiGroup upload
 * @apiSuccess {Number} code 错误状态码.
 * @apiSuccess {String} msg  错误消息.
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "code" : "0",
 *      "msg" : "ok"
 * 
 *  }
 * @apiSampleRequest http://10.36.147.178:3000/api/upload 
 * @apiVersion 1.0.0
 */
router.post('/', upload.single('file'), uploadImg);

//暴露路由实例
module.exports = router;