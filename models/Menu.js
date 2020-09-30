const  sequelize = require('./db')
const { DataTypes } = require('sequelize')
const  TopMenu = require('./TopMenu')
//创建一个模型对象
const Menu = sequelize.define("Menu",{
    name:{
        //路由名称
        type:DataTypes.STRING,
        allowNull:false
    },
    path:{
        //路由路径
        type:DataTypes.STRING,
        allowNull:false
    },
    icon:{
        //图标
        type:DataTypes.STRING,
        allowNull:true
    },
    title:{
        //名称
        type:DataTypes.STRING,
        allowNull:false
    },
    children:{
        //子菜单
        type:DataTypes.STRING,
        allowNull:true
    }
},{
    paranoid:true           //逻辑删除，增加删除时间
})
Menu.belongsTo(TopMenu)
module.exports = Menu