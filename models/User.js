const  sequelize = require('./db')
const { DataTypes } = require('sequelize')

//创建一个模型对象
const User = sequelize.define("User",{
    loginId:{
        //登录账号
        type:DataTypes.STRING,
        allowNull:false
    },
    loginPwd:{
        //登录密码
        type:DataTypes.STRING,
        allowNull:false
    },
    name:{
        //昵称
        type:DataTypes.STRING,
        allowNull:false
    },
    sex:{
        type:DataTypes.BOOLEAN,
        allowNull:true,
    },
    headImg:{
        type:DataTypes.STRING,
        allowNull:true,
    }

},{
    //配置项
    // freezeTableName:true //强制表明等于模型名
    // tableName:''         //指定生成的表名
    // createdAt:false      //是否生成创建时间
    // updatedAt:false      //更新时间
    paranoid:true           //逻辑删除，增加删除时间
})

// User.sync()//表不存在则创建，不存在则不作操作
// User.sync({force:true})//标已存在则删除重新创建
// User.sync({alter:true})//不存在则创建。存在则修改差异
module.exports = User