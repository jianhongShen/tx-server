const { Sequelize } = require('sequelize')
//创建一个连接,orm实例
const sequelize = new Sequelize('tx_platform','root','123456',{
    host:'localhost',
    dialect:'mysql',
    logging:false,
})

module.exports = sequelize

//sequelize.close() 一般不需要手动关闭