const mongoose=require("mongoose")
const herosSchema= new mongoose.Schema({
    name:String,
    health:Number,
})

const Herosmodel= mongoose.model("hero",herosSchema)

module.exports={
    Herosmodel
}