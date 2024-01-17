const express=require("express")
const {connection, Herosmodel} = require("./db")

const app=express()
app.use(express.json())
app.get("/",(req,res)=>{
   res.send("<h1>Home Page</h1>")
})
app.get("/heros",async(req,res)=>{
   const params=req.params
   const query=req.query
   try{
    const heros=await Herosmodel.find()
    res.send(heros)
   }catch(err){
    res.send(err)
    console.log({"err":"something went wrong"})
   }
 
})

app.post("/addheros",async(req,res)=>{
    const data=req.body
    try{
    const herosData=new Herosmodel(data)
    await herosData.save()
    res.send(data)
    }catch(err){
        res.send(err)
        console.log({"err":"something went wrong"})
    }
})
app.patch("/editHeros/:id",async(req,res)=>{
    const ID=req.params.id
    const payload=req.body
    console.log(ID,payload)
    try{
     await Herosmodel.findByIdAndUpdate({_id:ID},payload)
     res.send(`this ${ID} is updated success fully`)
            console.log(`This ${ID} is updated`)
    }catch(err){
       console.log(err)
        res.send({"err":"something went wrong"})
    }
})

app.delete("/deleteheros/:id",async(req,res)=>{
    const ID=req.params.id
    try{
      await Herosmodel.findByIdAndDelete({_id:ID})
      res.send(`this ${ID} is Deleted`)
    }catch(err){
        console.log(err)
        res.send({"err":"something went wrong"})
    }
})
app.listen(9090,async()=>{
    try{
        await connection
        console.log("app is conected to db 9090")
    }catch(err){
        console.log("err")
    }
  
})


// const express=require("express")
// const { connection, Superheromodel } = require("./db")
// const app=express()
// app.use(express.json())
// app.get("/",(req,res)=>{
//    res.send("<h1>Home Page</h1>")
// })


// app.get("/heros",async(req,res)=>{
//     try{
//     const city=req.query.city
//     const health=req.query.health
//   const query={city,health}
//   console.log(query)
//     const heros=await Superheromodel.find()
//     res.send(heros)
//     }catch(err){
//         console.log(err)
//         res.send({"err":"something went wrong"})
//     }
// })

// app.post("/addHeros",async (req,res)=>{
//     const data=req.body
//     const heros=new Superheromodel(data)
//     await heros.save()
//     res.send(data)

// })

// app.patch("/editheros/:id",async(req,res)=>{
//     const ID=req.params.id
//     const payload=req.body
//     console.log(ID,payload)
//     try{
//      await Superheromodel.findByIdAndUpdate({_id:ID},payload)
//         res.send(`This ${ID} is updated`)
//         console.log(`This ${ID} is updated`)
//     }catch(err){
//         console.log(err)
//         res.send({"err":"something went wrong"})
//     }
// })

// app.delete("/deleteheros/:id",async(req,res)=>{
//       const ID=req.params.id;
//       try{
//        await Superheromodel.findByIdAndDelete({_id:ID})
//        res.send(`${ID} hasbeen deleted`)
//        console.log(`${ID} hasbeen deleted`)
//       }catch(err){
//         console.log(err)
//         res.send({"err":"something went wrong"})
//       }
// })
// app.listen(8000,async()=>{
//     try{
//         await connection
//     console.log("Connected to db")

//     }catch(err){
//         console.log(err)
//         console.log("err from database connect")
//     }
// })