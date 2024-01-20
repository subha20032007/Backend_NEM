const express=require("express")
const { connection } = require("./config/db")
const { Usermodel } = require("./model/User.model")
const Port=9090
const app=express()
const jwt=require("jsonwebtoken")
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("<h1>Home Page</h1>")
})
app.get("/users",async(req,res)=>{
    try{
      const user=await Usermodel.find()
      res.send(user)
    }catch(err){
        console.log(err)
        res.send({"err":"something went wrong"})
    }
  
})
app.post("/register",async(req,res)=>{
    const payload=req.body
    try{
      const user=new Usermodel(payload)
      await user.save()
      console.log(payload)
    }catch(err){
        console.log(err)
        res.send({"err":"something went wrong"})
    }
    res.send("register")
    
})
app.post("/login",async(req,res)=>{
     const {email,pass}=req.body
     try{
       const user=await Usermodel.find({email,pass})
       console.log(user)
       const token=jwt.sign({course:"backend"},"happy")
       
       if(user.length>0){
        res.send({"msg":"Login success full",token})
      
       }else{
     
        res.send("wrong credential")
       }
     }catch(err){
        console.log(err)
        res.send({"err":"something went wrong"})
    }
})
app.get("/data",(req,res)=>{
    const token=req.query.token
    if(token==="jaga123"){
    res.send("data .....")
    }else{
        res.send("login first")
    }
})
app.get("/cart",(req,res)=>{
    const token=req.query.token
    if(token==="jaga123"){
    res.send("cart ......")
}else{
    res.send("login first")
}
})
app.listen(Port,async()=>{
    try{
      await connection
      console.log("db was connected")
    }catch(err){
        console.log(err)
        res.send("err by connect")
    }
    console.log(`App running on port ${Port}`)
})
//1234