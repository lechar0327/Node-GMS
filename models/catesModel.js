/**
 * 配置品类实体类
 */

//连接数据库
const db = require('../config/db');
//创建品类实体类
const cateSchema = new db.Schema({
    /**
     * 品类code
     */
    cate: {
        type: String,
        required: true
    },
    /**
     * 品类中文
     */
    cate_zh: {
        type: String,
        required:true
    }
}, {
    timestamps: true
});

//创建实体模型
const cateModel = db.model("cates", cateSchema);
//暴露模型
module.exports=cateModel;