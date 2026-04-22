// creating two server in one file. 

const http = require("http")
http.createServer((req,res)=>{
    res.write("<h1> HI ,JAY SHREE RAM JI KI JAY HO</h1>")
    res.end("JAY SHREE RAM")
}).listen(5800)

http.createServer((req,res)=>{
    res.write("<h2> HI  glo ,JAY SHREE RAM JI KI JAY HO</h2>")
    res.end("JAY SHREE RAM")
}).listen(5600)