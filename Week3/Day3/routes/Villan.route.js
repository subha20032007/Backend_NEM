const express=require("express")
const {Villansmodel}=require("../models/Villan.model")
const villanRouter=express.Router()

villanRouter.get("/",async(req,res)=>{
    const params=req.params
    const query=req.query
    try{
     const villans=await Villansmodel.find()
     res.send(villans)
    }catch(err){
     res.send(err)
     console.log({"err":"something went wrong"})
    }
  
 })
 
 villanRouter.post("/add",async(req,res)=>{
     const data=req.body
     try{
     const villansData=new Villansmodel(data)
     await villansData.save()
     res.send(data)
     }catch(err){
         res.send(err)
         console.log({"err":"something went wrong"})
     }
 })
 villanRouter.patch("/edit/:id",async(req,res)=>{
     const ID=req.params.id
     const payload=req.body
     console.log(ID,payload)
     try{
      await Villansmodel.findByIdAndUpdate({_id:ID},payload)
      res.send(`this ${ID} is updated success fully`)
             console.log(`This ${ID} is updated`)
     }catch(err){
        console.log(err)
         res.send({"err":"something went wrong"})
     }
 })
 
 villanRouter.delete("/delete/:id",async(req,res)=>{
     const ID=req.params.id
     try{
       await Villansmodel.findByIdAndDelete({_id:ID})
       res.send(`this ${ID} is Deleted`)
     }catch(err){
         console.log(err)
         res.send({"err":"something went wrong"})
     }
 })

 module.exports={
    villanRouter
 }