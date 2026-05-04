const http = require("http")
http.createServer((req,res)=>{

    //console.log(req.url)
    //console.log(req.headers.host)// know about the localhost
   // console.log(req.method);
    if(req.url=="/"){
       res.write("<h1>HOME PAGE</h1>") 
    }
    else if(req.url=="/login"){
        res.write("<h1>LOGIN page</h1>")
    }else{
        res.write("<h1>Other page</h1>")
    }

    
    res.end()
}).listen(5600)