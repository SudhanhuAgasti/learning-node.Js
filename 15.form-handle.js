const http = require("http");
const fs =require("fs");

const queryString= require("querystring")



http.createServer((req,res)=>{
fs.readFile("13-html/form.html","utf-8",(err,data)=>{// fs.readFile alaways take 3 para meter ("filepath/filename","utf-8",(err,data))
    if (err) {
        res.writeHead(500,{"content-type":"text/plain"})
        res.end("<h1>this is an server side error</h1>")
    }
    if(req.url=="/"){
         res.writeHead(200,{"content-type":"text/html"})
         res.end(data)
    }
    else if(req.url=="/submit"){
        // HERE WE START FORM HANDLING
        let dataBody=[]
        req.on("data",(chunk)=>{
            dataBody.push(chunk);
        })

        req.on("end",()=>{
        let rawData=Buffer.concat(dataBody).toString();
        let readableData=queryString.parse(rawData)
        console.log(readableData);
           
        })
    
        res.end("<h1>data is submitted</h1>")
    }
})
}).listen(4566)