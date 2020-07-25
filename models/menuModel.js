/**
 * 配置Menu实体类
 */

//连接数据库
const db = require('../config/db');
//创建菜单实体类
const menuSchema = new db.Schema({
    parent: {
        type: String,
        default: 0
    },
    /**
     * 菜单文本
     */
    text: {
        type: String,
        required: false
    },
    /**
     * 跳转路径
     */
    path: {
        type: String,
        required: false
    },
    /**
     * 组件名称
     */
    component: {
        type: String,
        required: false
    },
    /**
    * icon标识
    */
    icon: {
        type: String,
        required: false
    },
    /**
     * 子模块
     */
    children: {
        type: Array,
        default: []
    }
}, {
    timestamps: true
});

//创建实体模型
const menuModel = db.model("menus", menuSchema);
//暴露模型
module.exports = menuModel;