const fs=require("fs")
const logger=(req,res,next)=>{
     
    fs.appendFileSync("./log.txt",`routes${req.method} url ${req.url} \n`,"utf-8")
    next()
}

module.exports={logger}