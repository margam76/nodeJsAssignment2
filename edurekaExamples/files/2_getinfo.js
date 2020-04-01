var fs = require('fs')
fs.stat('sample.txt',(err,stats)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Is it a file?: ",stats.isFile())
        console.log("Is a directory?: ",stats.isDirectory())
        console.log("size",stats.size)
    }
})