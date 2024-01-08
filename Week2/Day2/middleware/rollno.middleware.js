const rollno=(req,res,next)=>{
    if(req.method==="post"&&req.res==="/"){
        req.body.rollno=Math.floor(math.random*10)
        next()
    }
}
//12