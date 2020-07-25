/**
 * 服务层,处理业务逻辑
 */

//引入模型
const  userModel = require('../models/userModel');
//引入密码加盐工具
const bcryptjs = require("bcryptjs");
//引入token验证的模块
const jsonwebtoken = require('jsonwebtoken');

//注册用户
exports.insertUser = async (req, res) => {
    //存储返回对象数据
    let responseDTO = { code: 0, msg: "" };

    let { username, pwd } = req.body;

    if (!username || !pwd) {
        responseDTO = {
            code: 204,
            msg: "用户名或密码不能为空"
        }
    } else {

        //查询当前用户对象
        let userInfo = await userModel.findOne({
            username
        });

        if (userInfo) {
            responseDTO = {
                code: 205,
                msg: "当前用户名已存在"
            }
        }
        else {
            try {

                pwd = bcryptjs.hashSync(pwd, 10);

                await userModel.create({ username, pwd });
                responseDTO.msg = '注册成功';
            } catch (error) {
                console.log(error);

                res.send({
                    code: 203,
                    msg: "创建失败"
                });
            }
        }
    }

    res.send(responseDTO);
}


/**
 * 登录方法  
 * @param {string} username 
 * @param {string} pwd 
 * 
 * 如果有注册就登录,未注册就给注册
 */
exports.login = async (req, res) => {
    //存储返回对象数据
    let responseDTO = { code: 0, msg: "" };
    // 获取页面传递过来的参数
    let { username, pwd } = req.query;

    if (!username || !pwd) {
        responseDTO = {
            code: 204,
            msg: "用户名或密码不能为空"
        }
    } else {
        //查询当前用户对象
        let userInfo = await userModel.findOne({
            username
        });

        //不存在,就注册
        if (!userInfo) {
            await userModel.create({
                username,
                pwd
            });

            responseDTO.msg = "注册成功";
        }
        else {

            if (userInfo.comparePassword(pwd)) {
                /**
                 * 生成token
                 */
                const token = jsonwebtoken.sign(
                    {
                        // 思考将那些信息写入到token中，一般是用户角色信息、用户Id信息、用户的一些不敏感的信息
                        // 不要写入太多的数据进去。
                        userId: userInfo._id,
                        username: userInfo.nickname || userInfo.username
                    },
                    "GMS",
                    {
                        expiresIn: "2h"
                    }
                );

                responseDTO.msg = "登录成功";
                responseDTO.token = token;
            } else {
                responseDTO = {
                    code: 203,
                    msg: "用户名或密码不正确"
                }
            }
        }
    }

    res.send(responseDTO);
}


