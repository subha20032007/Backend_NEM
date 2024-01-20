const express=require("express")

const app=express()

app.get("/",(req,res)=>{
    const {name}=req.query
    // res.send("<h1>Hii From Home Page</h1>")
    console.log(name)
    res.send(`<h1>Hii From ${name} Page</h1>`)
})

app.get("/data",(req,res)=>{
    const data={
        banpur:"20C",
        nandapur:"90C",
        balugaon:"1C"
    }
    const {city}=req.query
    res.send(`<h1>In ${city} Tempreture is ${data[city]}</h1>`)
})

app.get("/student/:roll_no",(req,res)=>{
    const roll_no=req.params.roll_no
    res.send(`<h1>This ${roll_no} rollno Student is Very Good</h1>`
    )
})

app.listen(9090,()=>{
    console.log("app listen on port 9090")
})
//git add .