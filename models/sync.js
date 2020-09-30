//同步所有模型
require("./Admin")
require("./User")
const sequelize = require('./db')

sequelize.sync({alter:true}).then(()=>{
    console.log('数据库所有模型已同步')
})


