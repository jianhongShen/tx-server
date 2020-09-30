exports.getErr = function(err="server error",errCode=500){
    return{
        code:errCode,
        msg:err,
        data:null
    }
}
exports.getResult = function(result){
    return{
        code:0,
        msg:"",
        data:result
    }
}