const fs=require("fs")


//sync file operation.


// crate new file.........
// fs.writeFileSync("21-files/apple.txt","this is a fruir from crud operation")
// fs.writeFileSync("21-files/bini.txt","hi am bini form crud ")


// delete files.....
//fs.unlinkSync("21-files/apple.txt")


//read file data .......
 //const Readdata=fs.readFileSync("21-files/bini.txt","utf-8");
//  console.log(Readdata);



//update file data.....
//fs.appendFileSync("21-files/bini.txt","hi now i am changed");


const operation= process.argv[2]

 if (operation=="write"){
    const name = process.argv[3];
    const content= process.argv[4];
    const fulllName='21-files/'+name+".txt"
   
    fs.writeFileSync(fulllName,content)
 }
 else if(operation=="delete"){
    const name=  process.argv[3];
    const fulllName='21-files/'+name+".txt";
        fs.unlinkSync(fulllName)
 }
 else if(operation=="read"){
    const name = process.argv[3];
    const fulllName='21-files/'+name+".txt"
   
    let data =fs.readFileSync(fulllName,"utf-8")
    console.log(data);
}else if(operation=="update"){
     const name = process.argv[3];

    const fulllName='21-files/'+name+".txt"
    const updateData=process.argv[4];
   
    fs.appendFileSync(fulllName,updateData)
    
}    else{
    console.log("oeration not found")
}