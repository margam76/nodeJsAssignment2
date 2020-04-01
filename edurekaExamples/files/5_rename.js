var fs = require('fs')

fs.rename('sample.txt','rename.txt',(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log('file name is renamed')
    }
})