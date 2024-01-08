
app.get("/students",(req,res)=>{
    res.send("<h1>Student Page</h1>")
})

app.post("/addStudents",(req,res)=>{
    res.send("<h1>Add students</h1>")
})