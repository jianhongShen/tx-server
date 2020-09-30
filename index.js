const express = require('express')
const path = require('path')

const app = express()
const staticPath = path.resolve(__dirname,'./public')
console.log(process.env.NODE_ENY)

app.use("/static",express.static(""))
//当你请求的头是application/x-www-form-urllencoded将请求体读成对象
app.use(express.urlencoded({extended:true}))
//当你请求的头是application/json将请求体读成对象
app.use(express.json())

//路由
router = app.use("/api/admin",require("./routes/api/adminRouter"))

app.listen(9527,()=>{
    console.log("开启服务")
})
