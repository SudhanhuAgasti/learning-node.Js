const http = require("http");


const age= 26;
const server = http.createServer((req, res) => {//just server take as variable.
 res.writeHead(200,{"Content-Type":"text/html"})// it is generally use for setting head that in the next line which html given properly works.

    res.write(`
        <html>
        <head>
        <title>SUDHANHSU</title>
        </head>
        <body>
        <h1>IT IS MY HTML CODE YOU CAN SEE</h1>
        <h2>`+34+`</h2>
        <h2>`+new Date+`</h2>
         <h2>`+age+`</h2>

        </body>
        </html>
        `)

    res.end();// it can be blank but one thing  it is bound to write
    // and also generally use for exit a process.
    
    process.exit()// generally use for exit the whole process.
})
server.listen(5400)
