const arg= process.argv
 
 //console.log("-------",arg[5]);

const port=arg[2];

 const http=require("http");
 http.createServer((req,res)=>{
    res.write("jay shree ram");
    res.end();
 }).listen(port)


