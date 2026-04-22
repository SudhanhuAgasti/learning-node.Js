const http = require("http");

const userForm = require("./20.userForm")
const userData = require("./19.userDataSubmit")


http.createServer((req, res) => {
    if (req.url == "/") {
        res.writeHead(200, { "content-type": "text/html" })
        userForm(req, res)
    }else if(req.url=="/submit"){
        res.writeHead(200, { "content-type": "text/html" })
       userData(req,res)
    }

    res.end();

}).listen(6799)


