const http= require("http");


// making some data
const userData=[
    {
        username:"alex",
        age:"34",
        email:"alex@gami.com"
        
    },
     {
        username:"alexaji",
        age:"30",
         email:"aljiex@gami.com"
        
    },
     {
        username:"thalex",
        age:"32",
         email:"alex@thumi.com"
        
    },
     {
        username:"ioalex",
        age:"35",
         email:"aleyuh@gami.com"
        
    },
]// this is called as Array of object 
http.createServer((req,res)=>{


    // when we create api then we deffinitely create there header.

    res.setHeader("Content-Type","application/json")// its only take content-type which type of data taken.

    res.write(JSON.stringify(userData));
    
    res.end()
}).listen(6400)