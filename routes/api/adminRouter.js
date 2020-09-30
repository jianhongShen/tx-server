const express = require('express')
const adminServe = require('../../services/adminServices')
const sendMsg = require("../util/fomatResult")
AdminRouter = express.Router();

//分页条件获取管理员信息
AdminRouter.get("/",async (req,res)=>{
    console.log("分页条件获取管理员信息")
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const name = req.query.name || "10";

    const result = await adminServe.getAdmin(page,limit,name);
    res.send(sendMsg.getResult(result))
})

//获取单个管理员信息
AdminRouter.get("/:id",(req,res)=>{
    console.log("获取单个管理员信息")
})

//添加管理员信息
AdminRouter.post("/",(req,res)=>{
    console.log("添加管理员信息")
})
//修改管理员信息
AdminRouter.put("/:id",async (req,res)=>{
    console.log("修改管理员信息")
    const id = req.params.id
    if(id != "0" && !id){
        sendMsg.getErr("缺失id",400)
    }else{
        let result
    }
})
//删除管理员信息
AdminRouter.delete("/",(req,res)=>{
    console.log("删除管理员信息")
})
//管理员登录
AdminRouter.get("/login",(req,res)=>{
    console.log("获取单个管理员信息")
})

module.exports = AdminRouter