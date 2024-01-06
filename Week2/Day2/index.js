const express=require("express")

const app=express()
const port=9090
app.get("/",(req,res)=>{
    res.send("<h1>Home Page</h1>")
})

app.get("/about",(req,res)=>{
    res.send("<h1>About Page</h2>")
})

app.listen(port,()=>{
    console.log(`app runing in the port ${port}`)
})