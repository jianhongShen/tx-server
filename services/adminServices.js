const Admin = require("../models/Admin")
//添加一个管理员
exports.addAdmin = function(adminObj){
    
}
//删除一个管理员
exports.deleteAdmin = function(adminObj){
    
}
//修改一个管理员
exports.updateAdmin = function(adminObj){
    
}
//分页条件获取管理员信息
exports.getAdmin = function(page,limit,name){
    
}
//登录
exports.login = async function(loginId,loginPwd){
    const result = await Admin.findOne({
        where:{
            loginId,
            loginPwd
        }
    })
    if(result && result.loginId===loginId && result.loginPwd===loginPwd){
        console.log("登陆成功")
    }
}
//根据主键查询管理员
exports.getAdminById = async function(loginId,loginPwd){
    const result = await Admin.findOne({
        where:{
            loginId,
            loginPwd
        }
    })
    if(result && result.loginId===loginId && result.loginPwd===loginPwd){
        console.log("登陆成功")
    }
}
