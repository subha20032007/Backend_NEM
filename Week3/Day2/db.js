const mongoose =require("mongoose")

const connection=mongoose.connect("mongodb://127.0.0.1:27017/heros")

const herosSchema= new mongoose.Schema({
    name:String,
    city:String,
    health:Number,
})

const Herosmodel= mongoose.model("hero",herosSchema)

module.exports={
    connection,
    Herosmodel
}
// const mongoose=require("mongoose")

// const connection=mongoose.connect("mongodb://127.0.0.1:27017/superheroDB")

// const superheroSchema=new mongoose.Schema({
//     name:String,
//     city:String,
//     health:Number
// })

// const Superheromodel= mongoose.model("Superhero",superheroSchema)

// module.exports=({
//     connection,
//     Superheromodel
// })