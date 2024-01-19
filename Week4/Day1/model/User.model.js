const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    name:String,
    age:Number,
    pass:String,
    email:String
})

const Usermodel=mongoose.model("user",userSchema)

module.exports={
    Usermodel
}