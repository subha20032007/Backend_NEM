const express=require("express")
const studentRouter=express.Router()

studentRouter.get("/",(req,res)=>{
    res.send("<h1>Student Page</h1>")
})

studentRouter.post("/addStudents",(req,res)=>{
    res.send("<h1>Add students</h1>")
})