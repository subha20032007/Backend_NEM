const http=require("http")

const fs=require("fs")

const array=["happy","papi","rocky","bapi","runku","anku"]
const server=http.createServer((req,res)=>{
    if(req.url==="/"){
      res.setHeader("Content-type","text/html")
      res.end("<h1>WELCOME TO EMPOLYEE MANAGEMENT SYSTEM </h1>")
    }
    
    else if(req.url==="/writeinfile"){
     fs.writeFile("./employe.txt","Employee name as Follow :",(err)=>{
       if(err){
        res.write("err")
        res.end()
       }else{
        res.end("<h1>Data has been write in file</h1>")
       }
     })
    }

    else{
        res.setHeader("Content-type","html/text")
        res.end("<h1>404 Page Not Found</h1>")
    }
})

server.listen(9090,()=>{
    console.log("server runing on port 9090")
})