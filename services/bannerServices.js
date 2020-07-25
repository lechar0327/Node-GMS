/**
 * 服务层,处理业务逻辑
 */

//引入模型
const bannerModel = require('../models/bannerModel');

//添加banner图
exports.insertBanner = async (req, res) => {
    let responseDTO = { code: 0, msg: "" };
    try {
        const { title, desc, categoryId, status, imgSrc } = req.body;

        await bannerModel.create({title, desc, categoryId, status, imgSrc});
        responseDTO.msg = "创建成功";

    } catch (error) {
        console.log(error);
        
        responseDTO.code = "203";
        responseDTO.msg = "创建失败";
    }

    res.send(responseDTO);
}

//查询banner图
exports.queryBanner = async (req, res) => {

    const pageNum = parseInt(req.query.pageNum) ||  parseInt(process.env.pageNum); // 页码
    const pageSize = parseInt(req.query.pageSize) ||  parseInt(process.env.pageSize); // 每页显示条数

    try {
        //获取查询到的数据
        const data = await bannerModel.find().skip((pageNum - 1) * pageSize).limit(pageSize);

        const total = await bannerModel.find().countDocuments();
        // 再计算出 totalPage
        const totalPage = Math.ceil(total / pageSize);

        // 响应
        res.send({
            code: 0,
            msg: "ok",
            data: {
                list: data,
                totalPage: totalPage
            }
        });
    } catch (error) {
        console.log(error);
        
        res.send({
            code: 203,
            msg: "查询失败"
        });
    }
}




