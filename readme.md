## 搭建基于express的接口框架
* cnpm express -S
* cnpm install body-parser -S
> 注册接收req.body值的中间件

* cnpm i jsonwebtoken -S
> 处理token,身份验证

* cnpm install mongoose --save

* cnpm install express-async-errors -S
> 处理异步异常错误

* cnpm install bcryptjs -S
> 加密加盐

* cnpm install multer -S
> 文件上传

* cnpm install dotenv -S
> 环境配置

* cnpm install moment -S
> 时间插件

  项目架构:
  app.js > routers > middlewares | services  >models