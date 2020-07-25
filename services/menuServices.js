/**
 * 服务层,处理业务逻辑
 */

//引入模型
const menuModel = require('../models/menuModel');

//添加菜单
exports.insertMenu = async (req, res) => {
    let responseDTO = { code: 0, msg: "" };
    try {
        const { text, path, component, icon, parent } = req.body;

        await menuModel.create({ text, path, component, icon, parent });
        responseDTO.msg = "创建成功";

    } catch (error) {
        console.log(error);

        responseDTO.code = "203";
        responseDTO.msg = "创建失败";
    }

    res.send(responseDTO);
}

//查询菜单列表
exports.queryMenu = async (req, res) => {

    const pageNum = parseInt(req.query.pageNum) || parseInt(process.env.pageNum); // 页码
    const pageSize = parseInt(req.query.pageSize) || parseInt(process.env.pageSize); // 每页显示条数

    try {
        //获取查询到的数据
        let data = await menuModel.find().skip((pageNum - 1) * pageSize).limit(pageSize);

        const total = await menuModel.find().countDocuments();
        // 再计算出 totalPage
        const totalPage = Math.ceil(total / pageSize);

        //获取JSON树,菜单
        data = getJsonTree(data, 0);

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


var getJsonTree = function (data, parent) {
    var itemArr = [];

    data.map((node) => {
        if (node.parent == parent) {
            var newNode = {
                id: node.id,
                text: node.text,
                path: node.path,
                component: node.component,
                icon: node.icon,
                parent: node.parent,
                children: getJsonTree(data, node.id)
            };
            itemArr.push(newNode);
        }
    });

    return itemArr;
}





