const mongoose=require("mongoose")
const villansSchema= new mongoose.Schema({
    name:String,
    health:Number,
})

const Villansmodel= mongoose.model("villan",villansSchema)

module.exports={
    Villansmodel
}