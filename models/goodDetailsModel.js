/*
* 配置商品详情实体类
*/

const db = require('../config/db');

//创建实体类
const goodDetailsSchema = new db.Schema(
    {
        /**
         * 商品id
         */
        goodId: {
            type: String,
            required: true
        },
        //商品地址
        goodAddress:{
            type: String,
        },
        /**
         * 商品描述
         */
        goodDesc: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    });

//创建实体模型
const goodDetailsModel = db.model('goodDetails', goodDetailsSchema);

//暴露模型
module.exports = {goodDetailsModel};