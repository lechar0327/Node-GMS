/**
 * 服务层,处理业务逻辑
 */

//引入模型
const { goodModel } = require('../models/goodsModel');
const { goodDetailsModel } = require('../models/goodDetailsModel');

//添加修改商品
exports.insertUpdateGoods = async (req, res) => {
    //存储返回对象数据
    let responseDTO = { code: 0, msg: "" };
    try {
        const { name, img, price, cate, status, attribute, remark, id } = req.body;

        console.log(req.body);
        //如果传了id,则是修改
        if (id) {
            await goodModel.updateOne({ _id: id }, req.body);
        }
        else {
            await goodModel.create(req.body);
            responseDTO.msg = "创建成功";
        }

    } catch (error) {
        console.log(error);
        responseDTO.code = 203;
        responseDTO.msg = "创建失败";
    }
    res.send(responseDTO);
}

//查询商品
exports.queryGoodsList = async (req, res) => {
    try {
        const pageNum = parseInt(req.query.pageNum) || 1; // 页码
        const pageSize = parseInt(req.query.pageSize) || 20; // 每页显示条数
        //商品名称
        const name = req.query.name;
        //商品品类
        const cate = req.query.cate;

        //开始时间
        const startDate = req.query.startDate;
        //结束时间
        const endDate = req.query.endDate;

        var query = goodModel.find({ name: new RegExp(name), cate: new RegExp(cate) });


        if (startDate || endDate) {
            query.where({ $and: [{ createdAt: { $gt: startDate } }, { createdAt: { $lt: endDate } }] });
        }

        let total = await query.exec();
        total = total.length;

        query.skip((parseInt(pageNum) - 1) * pageSize);
        query.limit(parseInt(pageSize));

        const data = await query.exec();

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
        res.send({
            code: 203,
            msg: "查询失败"
        });
    }
}

//查询商品基础信息
exports.queryGoodsBaseInfo = async (req, res) => {
    //存储返回对象数据
    let responseDTO = { code: 0, msg: "" };
    try {
        const { id } = req.query;

        responseDTO.code = 0;
        responseDTO.msg = "查询成功";
        responseDTO.data = await goodModel.findOne({ _id: id });

    } catch (error) {
        console.log(error);
        responseDTO.code = 203;
        responseDTO.msg = "查询失败";
    }
    res.send(responseDTO);
}

//删除商品信息
exports.deleteGood = async (req, res) => {
    //存储返回对象数据
    let responseDTO = { code: 0, msg: "" };
    try {
        const { id } = req.body;

        responseDTO.code = 0;
        responseDTO.msg = "删除成功";
        responseDTO.data = await goodModel.deleteOne({ _id: id });

    } catch (error) {
        console.log(error);
        responseDTO.code = 203;
        responseDTO.msg = "删除失败";
    }
    res.send(responseDTO);
}

//添加商品详情
exports.insertGoodDetails = async (req, res) => {
    //存储返回对象数据
    let responseDTO = { code: 0, msg: "" };
    try {
        const { id, goodDesc, goodAddress } = req.body;

        //如果传了id,则是修改
        if (id) {
            await goodDetailsModel.updateOne({ _id: id, goodDesc: goodDesc, goodAddress }, req.body);
        }
        else {
            await goodDetailsModel.create(req.body);
            responseDTO.msg = "创建成功";
        }

    } catch (error) {
        console.log(error);
        responseDTO.code = 203;
        responseDTO.msg = "创建失败";
    }

    res.send(responseDTO);
}


//查看商品详情
exports.queryGoodDetails = async (req, res) => {
    //存储返回对象数据
    let responseDTO = { code: 0, msg: "" };
    try {
        const { id } = req.query;

        const data = await goodDetailsModel.findOne({ _id: id });
        responseDTO.code = 0;
        responseDTO.msg = "查询成功";
        responseDTO.data = data;

    } catch (error) {
        console.log(error);

        responseDTO.code = 203;
        responseDTO.msg = "查询失败";
    }
    res.send(responseDTO);
}



