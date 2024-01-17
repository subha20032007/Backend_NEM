const mongoose =require("mongoose")
require("dotenv").config()
const connection=mongoose.connect(process.env.mongoURL)

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
