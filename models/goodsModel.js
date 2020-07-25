/*
* 配置商品实体类
*/

const db = require('../config/db');

//创建实体类
const goodSchema = new db.Schema(
    {
        /**
         * 商品名称
         */
        name: {
            type: String,
            required: true
        },
        /**
         * 图片路径 
         */
        img: {
            type: String,
            required: true
        },
        /**
         * 价格
         */
        price: {
            type: db.Schema.Types.Decimal128,
            required: true
        },
        /**
         * 品类code
         */
        cate: {
            type: String,
            required: true
        },
        /**
        * 状态
        */
        status: {
            type: Number,
            default:0
        },
        /**
        * 属性
        */
        attribute:{
            type:Array,
            default:[]
        },
        /**
        * 备注
        */
        remark:{
            type:String
        }
    },
    {
        timestamps: true
    });

//创建实体模型
const goodModel = db.model('goods', goodSchema);

//暴露模型
module.exports = {
    goodModel
}