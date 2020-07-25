/**
 * 服务层,处理业务逻辑
 */

//引入模型
const catesModel = require('../models/catesModel');

//添加品类
exports.insertCates = async (req, res) => {
    try {
        const { cate, cate_zh } = req.body;
        console.log(cate);
        await catesModel.create({ cate, cate_zh });
        res.send({
            code: 0,
            msg: "创建成功"
        });
    } catch (error) {
        res.send({
            code: 203,
            msg: "创建失败"
        });
    }
}

//查询品类
exports.queryCates = async (req, res) => {
    // 获取前端传递过来的分页的数据 pageNum、pageSize  query
    const pageNum = parseInt(req.query.pageNum) || 1; // 页码
    const pageSize = parseInt(req.query.pageSize) || 20; // 每页显示条数

    try {
        const data = await catesModel.find().skip((pageNum - 1) * pageSize).limit(pageSize);
        // totalPage = Math.ceil(总条数 / 每页显示条数) = Math.ceil(总条数 / pageSize)
        // 先计算出总条数 total
        const total = await catesModel.find().countDocuments();
        // 再计算出 totalPage
        const totalPage = Math.ceil(total / pageSize);

        // 响应
        res.send({
            code: 0,
            msg: "ok",
            data: {
                data: data,
                totalPage: totalPage
            }
        });
    } catch (error) {
        res.send({
            code: 203,
            msg: "查询失败"
        });
    }
}