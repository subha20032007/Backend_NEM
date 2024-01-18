const express=require("express")
const {Herosmodel}=require("../models/Hero.model")
const heroRouter=express.Router()
heroRouter.get("/",async(req,res)=>{
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
 
 heroRouter.post("/add",async(req,res)=>{
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
 heroRouter.patch("/edit/:id",async(req,res)=>{
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
 
 heroRouter.delete("/delete/:id",async(req,res)=>{
     const ID=req.params.id
     try{
       await Herosmodel.findByIdAndDelete({_id:ID})
       res.send(`this ${ID} is Deleted`)
     }catch(err){
         console.log(err)
         res.send({"err":"something went wrong"})
     }
 })

 module.exports={
    heroRouter
 }