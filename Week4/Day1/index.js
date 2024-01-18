const express=require("express")
const Port=8080
const app=express()


app.get("/",(req,res)=>{
    res.send("<h1>Home Page</h1>")
})

app.listen(Port,()=>{
    console.log(`App running on port ${Port}`)
})