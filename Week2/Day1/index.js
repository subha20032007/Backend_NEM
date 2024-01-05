
const express=require("express")
const fs=require("fs")

const app=express()
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("app is running")
})

app.get("/data",(req,res)=>{
    let data=fs.readFileSync("./db.json",{encoding:"utf-8"})
    const parse_data=JSON.parse(data)
    console.log(parse_data)
    res.send("data getting")
})
app.post("/data",(req,res)=>{
    console.log(req.body)
    res.send("data work")
})

app.get("/student",(req,res)=>{
    const rawData=fs.readFileSync("./db.json","utf-8")
    const data=JSON.parse(rawData)
    console.log(data.student)
    res.send("student data getting")
})

app.post("/student",(req,res)=>{
    //read file
    const rawData=fs.readFileSync("./db.json","utf-8")
    //json to obj
    const data=JSON.parse(rawData)
    //add data to student
    data.student.push(req.body)
    //write the data in file 
    fs.writeFileSync("./db.json",JSON.stringify(data))
    res.send("student is added")
    console.log(data.student)
})

app.post("/teacher",(req,res)=>{
    let rawData=fs.readFileSync("./db.json","utf-8")
    let data=JSON.parse(rawData)
   data.teacher.push(req.body)
   fs.writeFileSync("./db.json",JSON.stringify(data))

 
    res.send("teacher data")
    console.log(data.teacher)
})

app.delete("/teacher",(req,res)=>{
    const rawData=fs.readFileSync("./db.json","utf-8")
    const data=JSON.parse(rawData)
    let newData=data.teacher.filter((el)=>el.name!==req.body.name)
    console.log(newData)
    // fs.writeFileSync("./db.json",JSON.stringify(newData))
    res.send("i am the delete data")
    // console.log(data.teacher)

})
app.listen(2000,()=>{
    console.log("app run port 2000")
})