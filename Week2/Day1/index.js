
const express=require("express")
const fs=require("fs")
const app=express()

app.use(express.json())
app.get("/",(req,res)=>{
res.end("Hello world")
})

app.get("/data",(req,res)=>{
   const data=fs.readFileSync("./db.json","utf-8")
   const parsed_data=JSON.parse(data)
   console.log(parsed_data)
   res.send("you got data in terminal")
})

app.get("/appStudents",(req,res)=>{
    const data=fs.readFileSync("./db.json",{encoding:"utf-8"})
const parse_data=JSON.parse(data)
    console.log(parse_data.students)
    console.log("all student in terminal")
})

app.post("/appStudents",(req,res)=>{
    //read data First
    const data=fs.readFileSync("./db.json","utf-8")
    //parsing the data for add a new student
     const parse_data=JSON.parse(data)
    //add new student
    parse_data.students.push(req.body)
    //write file
    fs.writeFileSync("./db.json",JSON.stringify(parse_data))
    console.log(parse_data)
    res.send("data post is work")
})
// app.delete("/appStudent",(req,res)=>{
//     const data=fs.readFileSync("./db.json","utf-8")
//     const parse_data=JSON.parse(data)
//     const newData=parse_data.students.filter((el)=>req.body!==el.name)
//     fs.writeFileSync("./db.json",JSON.stringify(newData))
//     console.log(parse_data)
//     res.send("delete successFul")
// }) 7777
app.post("/students",(req,res)=>{
    const data=fs.db.json("./db.json","utf-8")
const parse_data=JSON.parse(data)

})
app.listen("9090",()=>{
    console.log("App run on server 9090")
})















//------------------------------------------------------------------------------------------------------------------------
// app.post("/add",(req,res)=>{
//     console.log(req.body)
//     res.end("app post")
// })

// app.put("/add",(req,res)=>{
// console.log(req.body)
//     res.end("it put data")
// })