const http = require("http");
const fs =require("fs");

http.createServer((req,res)=>{
fs.readFile("13-html/16-form.html","utf-8",(err,data)=>{
    if (err) {
        res.writeHead(500,{"content-type":"text/plain"})
        res.write("here is an server error")
    res.end();
    return ;
    }
if (req.url == "/") {
    res.writeHead(200,{"content-type":"text/html"})
         res.write(data)   
    } else if(req.url=="/submit"){
       res.write("<h1>FORM SUBMITTED</h1>")
   }
    res.end()
}) 
   
}).listen(4599)  












//     http.createServer((req, res) => {
//     res.writeHead(200, { "content-type": "text/html" })


//     console.log(req.url);

//    if (req.url == "/") {
//         res.write(`
//         <form action="/submit" method="post">
//         <input type:"text" placeholder="entername" name="name "/>
//         <input type:"text" placeholder="enteremail" name="email" />
//         <button>submit</button>
//         </form>
//         `)
//    } else if(req.url=="/submit"){
//         res.write("<h1>FORM SUBMITTED</h1>")
//     }


//     res.end()
// }).listen(4500)