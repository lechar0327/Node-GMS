//引入expres
const express = require('express');
//创建express实例
const app = express();

const dotenv = require('dotenv')
// dotenv 配置
dotenv.config()

//引入商品信息模块
const goodRoute=require('./routers/goodRouter');
//引入品类信息模块
const cateRoute=require('./routers/cateRouter');
//引入banner图模块
const bannerRoute=require('./routers/bannerRouter');
//引入上传图片中间件
const uploadImgRoute=require('./routers/uploadImgRouter');
//引入菜单信息模块
const menuRoute=require('./routers/menuRouter');
//引入登录注册模块
const userRoute=require('./routers/userRouter');

// 引入 express-async-errors
require("express-async-errors");

//注册处理静态资源的中间件
app.use(express.static('./public'));



// 注册接收req.body值的中间件
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// 统一错误处理 处理异步产生的错误
app.use((err, req, res, next) => {
    // 可以将错误信息写入到某个文件中，方便后续去查看文件
    // fs 模块  fs.writeFile
    //     不能使用 fs.writeFile 要用 fs.appendFile
    console.error(err);
    res.status(500).send(err.message);
});

//调用路由
app.use('/api/good',goodRoute);
app.use('/api/cate',cateRoute);
app.use('/api/banner',bannerRoute);
app.use('/api/upload',uploadImgRoute);
app.use('/api/menu',menuRoute);
app.use('/api/user',userRoute);

app.listen(3000,()=>{
    console.log("服务启动成功!");  
});