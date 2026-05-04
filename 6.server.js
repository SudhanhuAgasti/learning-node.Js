// creating server with using of "http package".

// const http = require("http")
// http.createServer((req,res)=>{
//     res.write("<h1>JAY SHREE RAM JI KI JAY</h1>")
//     res.end("JAY SHREE RAM")//req.end is is more necessary.
// }).listen(5600)// "5600" it is the port-no in which we want to  excess the server.

const http = require("http");
http.createServer((req,res)=>{
    res.write("jay shrree ram");
    res.end("sudhanshu");
}).listen(4500)
