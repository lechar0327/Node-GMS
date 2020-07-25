// 连接数据库的文件

const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/goods";

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("数据库连接成功");
  })
  .catch(error => {
    console.log("数据库连接失败，嘤嘤嘤嘤");
    console.log(error);
  });

module.exports = mongoose;
