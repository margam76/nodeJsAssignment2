var fs = require('fs')

fs.open('sample.txt','r+',(err,fd)=>{
    if(err){console.log(err)}
    else{
        console.log("file opened successfully")
    }
})