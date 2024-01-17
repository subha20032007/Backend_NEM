const mongoose=require("mongoose")

const main=async()=>{
try{
    const connection=await mongoose.connect("mongodb://127.0.0.1:27017/heros")
    console.log("connected")
    // await Herosmodel.insertMany([{name:"chunu",city:"banpur",health:90},{name:"munu",city:"nandapur",health:20}])
    const heros=new Herosmodel(
        {name:"gunu",city:"manpur",health:40}
    )
    await heros.save()
    const showhero=await Herosmodel.find()
    console.log(showhero)
    connection.disconnect()
    console.log("disconnected")
}catch(err){
    console.log(err)
}
}
main()

const herosSchema=new mongoose.Schema({
    name:String,
    city:String,
    age:String
})

const Herosmodel=mongoose.model("Hero",herosSchema)























// const mongoose=require("mongoose")

// const main=async()=>{
 
//     try{
//   const connection=await mongoose.connect("mongodb://127.0.0.1:27017/heros")  
// console.log("connected to the database");
// //Add One User
// // const user =new Herosmodel({
// //     name:"happy",
// //     city:"banpur",
// //     health:57
// // })
// // await user.save()
// //-----------------------
// //save user
// const heros=await Herosmodel.find()
// console.log(heros)
// connection.disconnect()
// console.log("mongoose disconnect")

// }catch(err){
// console.log(err)
//     }

// }

// main()
// const herosSchema=new mongoose.Schema({
//     name:String,
//     city:String,
//     health:Number
// })

// const Herosmodel=mongoose.model("Hero",herosSchema)





















