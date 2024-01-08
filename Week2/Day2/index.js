const express=require("express")
const fs=require("fs")
const app=express()

app.get("/",(req,res)=>{
    res.send("<h1>Home (:.:) Page</h1>")
})


app.listen(9090,()=>{
    console.log("Port run in 9090")
})