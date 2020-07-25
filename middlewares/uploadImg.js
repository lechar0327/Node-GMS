/**
 * 专门处理上传图片的中间件
 */

/**
 * 处理接收文件上传的路由
 * upload.single('name')上传文件的中间件  name表示 上传文件时 name属性指定的名称
 */
module.exports = (req, res, next) => {

    var path = req.file.path.replace('public\\', '');

    var url = 'http://' + req.headers.host + '/' + path;
    url = url.replace('public/', '');
    //存储返回对象数据
    let responseDTO = { code: 0, msg: "", data: url };
    responseDTO.msg = "上传成功";
    res.send(responseDTO);
};



