// CREATE FILE FORM REQUESTED DATA.(BOTH synchronous and asynchronous way .)
const http = require("http");
const fs = require("fs");

const queryString = require("querystring")



http.createServer((req, res) => {
    fs.readFile("13-html/16-form.html", "utf-8", (err, data) => {// fs.readFile alaways take 3 para meter ("filepath/filename","utf-8",(err,data))
        if (err) {
            res.writeHead(500, { "content-type": "text/plain" })
            res.end("<h1>this is an server side error</h1>")
        }
        if (req.url == "/") {
            res.writeHead(200, { "content-type": "text/html" })
            res.end(data)
        }
        else if (req.url == "/submit") {

            let dataBody = []
            req.on("data", (chunk) => {
                dataBody.push(chunk);
            })

            req.on("end", () => {
                let rawData = Buffer.concat(dataBody).toString();
                let readableData = queryString.parse(rawData);
                // console.log(readableData)

                // NOW TIME TO CREATE SOMTHING USING THE FORM INPUT DATA
                let dataString = "my name is " + readableData.name + " and my email id  is " + readableData.email;
                console.log(dataString);

                // generally sync file blocked the process till the file is not created. and it contains two parameters("path",datastring)

                //SYNC FILE CREATED......
                //  fs.writeFileSync("16-text/"+readableData.name+".txt",dataString);// sync file created.
                // console.log("file created !")


                //async file created.....
                fs.writeFile("16-text/" + readableData.name + ".txt", dataString, "utf-8", (err) => {
                    if (err) {
                        res.end("<h1>internal server error</h1>")
                        return false;
                    } else {
                        console.log("file created !")
                    }
                })
                res.end("<h1>THANK U  " + readableData.name + "!!  The name is  " + readableData.name + " and The email is " + readableData.email + "</h1>");// ehen data is submitted it show the entered name and main 
            })

        }
    })
}).listen(4576)