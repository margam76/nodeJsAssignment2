var fs = require ('fs')

fs.unlink('rename.txt',(err)=>{
    if(err){console.log(err)}
    else{ console.log('file deleted')}
})