/**
 * 配置Banner图实体类
 */

//连接数据库
const db = require('../config/db');
//创建品类实体类
const bannerSchema = new db.Schema({
    /**
     * 图片标题
     */
    title: {
        type: String,
        required: true
    },
    /**
     * 图片描述
     */
    desc: {
        type: String,
        required: true
    },
    /**
     * 图片类别  0 banner图  1 其他
     */
    categoryId: {
        type: Number,
        default: 0
    },
    imgSrc: {
        type: String,
        required: true
    },
    /**
     * 图片状态  0 启用 1禁用
     */
    status: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

//创建实体模型
const bannerModel = db.model("banners", bannerSchema);
//暴露模型
module.exports =bannerModel;