const express=require("express")

const teacherRouter=express.Router()

teacherRouter.get("/",(req,res)=>{
    res.send("<h1>Teacher Page</h1>")
})
teacherRouter.post("addTeachers",(req,res)=>{
    res.send("<h1>Add Teacher</h1>")
})

module.exports={
    teacherRouter
}