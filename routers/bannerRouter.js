//引入express
const express = require('express');

//路由实例
const router = express.Router();

const { insertBanner, queryBanner } = require('../services/bannerServices');

// 添加banner路由
router.post('/insertBanner', insertBanner);
router.get('/queryBanner', queryBanner);


//暴露路由实例
module.exports = router;