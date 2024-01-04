const http=require("http")

const fs=require("fs")

const server=http.createServer((req,res)=>{
    if(req.url==="/"){
      res.setHeader("Content-type","text/html")
      res.end("<h1>WELCOME TO EMPOLYEE MANAGEMENT SYSTEM </h1>")
    }else if(req.url==="/writeinfile"){
     fs.readFile("./emplote.txt",{encoding:"utf-8"},(err,data)=>{
        if(err){
            res.write("no employee Found")
            res.end()
        }else{
           res.end(data)
        }
     })
    }
})

server.listen(9090,()=>{
    console.log("server runing on port 9090")
})