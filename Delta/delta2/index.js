const express=require("express")
const app=express()
//port
let port=8080
app.listen(port,()=>{
    console.log(`app run on port ${port}`)
})
//app.use
//res.send
// app.use((req,res)=>{
//     console.log("request recive")
//    let code=("<h1>Fruits<h1><ul><li>apple</li><li>orange</li><li>banana</li></ul>")
//    res.send(code)
// })

//app.get
// app.get("/",(req,res)=>{
//     res.send("<h1>Home page</h1>")
// })

// app.get("/apple",(req,res)=>{
//     res.send("<h1>Apple page</h1>")
// })

// app.get("/orange",(req,res)=>{
//     res.send("<h1>Orange page</h1>")
// })

// app.get("*",(req,res)=>{
//     res.send("404 Page Not Found")
// })
//app.post
// app.post("/",(req,res)=>{
//     res.send({key:"<h1>Post success</h1>"})
// })

//params(req.params)

// app.get("/",(req,res)=>{
//     res.send("<h1>Home page</h1>")
// })
// app.get("/:username/:age",(req,res)=>{
//     const {username,age}=req.params

// res.send(`work app And user name ${username} and my age is ${age}`)
// })

//query string(req.query)
app.get("/",(req,res)=>{
    res.send("<h1>Home page</h1>")
})
app.get("/search",(req,res)=>{
  const {q}=req.query
    res.send(`search result for ${q}`)
})