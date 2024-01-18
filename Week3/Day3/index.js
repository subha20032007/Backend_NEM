const express=require("express")
const {connection} = require("./db")
const { heroRouter } = require("./routes/Heros.route")
const { villanRouter } = require("./routes/Villan.route")
const app=express()
require("dotenv").config()
app.use(express.json())

app.use("/heros",heroRouter)
app.use("/villans",villanRouter)
app.get("/",(req,res)=>{
   res.send("<h1>Home Page</h1>")
})

app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("app is conected to db ")
    }catch(err){
        console.log("err")
    }
  console.log(`app running on port ${process.env.port}`)
})

