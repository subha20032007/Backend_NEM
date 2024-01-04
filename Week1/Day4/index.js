const http=require("http")
const fs=require("fs")
const server=http.createServer((req,res)=>{
    if(req.url==="/"){
       res.setHeader("Content-type","text/html")//set response type
        res.end("<h1>home page</h1>")
    }else if(req.url==="/data"){
       fs.readFile("./data.txt",{encoding:"utf-8"},(err,data)=>{
        if(err){
            res.write("data no found")//
            res.end()
        }else{
           res.end(data)
        }
       })
    }else{
        res.end("Invalid end Point")
    }
})

server.listen(9090,()=>{
    console.log("server is Running on Port 9090")
})
//server
//listen
//.end
//.write
//setHeader
//createServer