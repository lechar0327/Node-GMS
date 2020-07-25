/**
 * 创建User实体类
 */

const db = require('../config/db');
//引入加密模块
const bcryptjs = require('bcryptjs');

//User实体类
const userSchema = new db.Schema({
    username: {
        type: String,
        required: true
    },
    pwd: {
        type: String,
        required: true
    },
    userphone: {
        type: String
    },
    email: {
        type: String
    },
    photoImg: {
        type: String
    },
    roleId: {
        type: Number,
    },
    /**
     * 用户状态  0启用  1禁用
     */
    status: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

//钩子函数,保存时触发,注意,此处的回调函数不能用箭头函数,this指向问题
userSchema.pre('save', function (next) {
    //bcryptjs密码加密
    console.log(this.pwd);
    this.pwd = bcryptjs.hashSync(this.pwd, 10);
    next();
});

//实例方法,类似于给schema实例添加原型方法,UserModel.proptype.comparePassword
userSchema.methods.comparePassword = function (pwd) {

    console.log(bcryptjs.compareSync(pwd, this.pwd));
    //对比密码  
    return bcryptjs.compareSync(pwd, this.pwd);
}

const userModel = db.model('users', userSchema);

module.exports = userModel;