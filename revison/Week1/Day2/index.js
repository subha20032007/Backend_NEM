const fs=require("fs")

console.log(fs)
console.log("start")
fs.writeFile("happy.txt","happy is a devloper",()=>{
    console.log("done")
    fs.readFile("happy.txt",(err,data)=>{
        try{
            console.log(data)
        }catch{
            console.log(err)
        }
    })
})
console.log("end")
//1