const watchMan=(req,res,next)=>{
    if(req.url==="/data"){
        next()
    }else{
        res.send("<h1>Log in First </h1>")
    }
}

module.exports={
    watchMan
}