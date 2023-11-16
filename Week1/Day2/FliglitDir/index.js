let figlit=require("figlet")

figlit("Play With Backend ",(err,data)=>{
    if(err){
        console.log("Some thing went Wrong")
    }
    console.log(data)
})