const express=require("express")
const fs=require("fs")
const {studentRouter}=require("./routes/student.router")
const {teacherRouter}=require("./routes/teacher.router")
const app=express()

app.use(studentRouter)
app.use(teacherRouter)
app.get("/",(req,res)=>{
    res.send("<h1>Home (:.:) Page</h1>")
})


app.listen(9090,()=>{
    console.log("Port run in 9090")
})