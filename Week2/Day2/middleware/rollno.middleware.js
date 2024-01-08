const rollno=(req,res,next)=>{
    if(req.method==="POST"&&req.url==="/"){
        req.body.rollno=Math.floor(Math.random()*10)
        next()
    }else{
        next()
    }
}
module.exports={rollno}