const  sequelize = require('./db')
const { DataTypes } = require('sequelize')

//创建一个模型对象
const TopMenu = sequelize.define("TopMenu",{
    title:{
        //名称
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    paranoid:true           //逻辑删除，增加删除时间
})

module.exports = TopMenu