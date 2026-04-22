const queryString=require("querystring");

function userData(req,res){

    let Databody=[];
    req.on("data",(chunks)=>{
        Databody.push(chunks);
    })
    req.on("end",()=>{
        let rawData=Buffer.concat(Databody).toString();
        let readableData=queryString.parse(rawData);
        console.log(readableData);
    })
res.write("<h1>u can get data form user data form</h1>")
}
module.exports = userData