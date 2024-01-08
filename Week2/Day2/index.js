const express=require("express")
const fs=require("fs")
const app=express()

app.get("/",(req,res)=>{
    res.send("<h1>Home (:.:) Page</h1>")
})
app.get("/students",(req,res)=>{
    res.send("<h1>Student Page</h1>")
})

app.post("/addStudents",(req,res)=>{
    res.send("<h1>Add students</h1>")
})
app.get("/teachers",(req,res)=>{
    res.send("<h1>Teacher Page</h1>")
})
app.post("addTeachers",(req,res)=>{
    res.send("<h1>Add Teacher</h1>")
})
app.listen(9090,()=>{
    console.log("Port run in 9090")
})