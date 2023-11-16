const fs=require("fs")

// fs.readFile("./lecture.txt",{encoding:"utf-8"},(err,data)=>{

//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })
// let data;
// try{
//   data=fs.readFileSync("./lecture.txt",{encoding:"utf-8"})
// }catch(err){
//     console.log("***",err)
// }
// fs.writeFile("./lecture.txt","You write data for me",(err)=>{
//     if(err){
//         console.log(err)
//         console.log("data not written")
//     }else{
//         console.log("file write success fully")
//     }
// })
// try{
//     fs.writeFileSync("./lecture.txt","This is My second Project")
//     console.log("Data written")
// }catch(err){
//     console.log(err)
// }

// console.log(data)

    fs.appendFile("./lecture.txt","\n second its append file \n",(err)=>{
       if(err){
        console.log(err)
       }else{
        console.log("written file done")
       }
    })


// console.log('data')