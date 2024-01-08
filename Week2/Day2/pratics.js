const express=require("express")
const {timeLogger}=require("./middleware/timelogger.middleware")
// const {watchMan}=require("./middleware/watchman.middleware")
const { logger } = require("./middleware/logger.middleware")
const {rollno}=require("./middleware/rollno.middleware")
const fs=require("fs")

const app=express()
const port=9090

app.use(timeLogger)
// app.use(watchMan)
app.use(logger)
app.use(express.json())
app.use(rollno)
app.get("/",(req,res)=>{
    console.log("home")
    res.send("<h1>Home Page</h1>")
})
app.post("/",(req,res)=>{
    
    res.send('data send')
    console.log(req.body)
})
app.get("/about",(req,res)=>{
    console.log("about")
    res.send("<h1>About Page</h2>")
})
app.get("/contact",(req,res)=>{
    console.log("contact")
    res.send("<h1>contact Page</h1>")
})

app.get("/data",(req,res)=>{
const data=fs.readFileSync("dummy.html","utf-8")
    res.send(data)
})
app.listen(port,()=>{
    console.log(`app runing in the port ${port}`)
})