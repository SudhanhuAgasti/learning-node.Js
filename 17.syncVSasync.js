// console.log("apple");
// setTimeout(()=>{
//     console.log("hi papa")
// },2000)
// console.log("hello")


// let a = 20;
// let b= 30;
// setTimeout(()=>{
//     b=100;
//     console.log(a+b)
// },2000);
// console.log(a+b);



// this is also async task
const fs = require("fs");
// fs.readFile("16-text/Pratima.txt","utf-8",(err,data)=>{
//     console.log(data)
// })
// console.log("end script");// its run 1st


// the sync task
const data=fs.readFileSync  ("16-text/Pratima.txt","utf-8")
console.log(data)// its run 1st

console.log("sync file completed")
