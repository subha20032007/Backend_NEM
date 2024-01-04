let fs=require("fs")

//readFile
// fs.readFile("lecture.txt",(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })
//readFile All value use encodeing
//it is a async function
// fs.readFile("lecture.txt",{encoding:"utf-8"},(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })

//readFileSync
// let data=fs.readFileSync("./lectre.txt",{encoding:"utf-8"})
// console.log(data)
//readFileSync handel Err
// let data;
// try{
//     data=fs.readFileSync("./lecture.txt",{encoding:"utf-8"})
//     console.log(">",data)
// }catch(err){
//     console.log(err)
// }
// console.log("good bye")

//writeFile

// fs.writeFile("./lecture.txt","This is My 1 project",(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("file written")
//     }
// })

//writeFileSync
// try{
// fs.writeFileSync("./lecture.txt","This is My 2nd project")
// console.log("write file")
// }catch(err){
//     console.log(err)
// }

//appendFile
// let text="happy"
// fs.appendFile("./lecture.txt",`\n I append the File  ${text,1+3}\n`,(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("appended")
//     }
// })

//appendFileSync
try{
fs.appendFileSync("./lecture.txt","i Append 3rd file")
console.log("append success")
}catch(err){
    console.log(err)
}