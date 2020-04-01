var fs = require('fs')

fs.appendFile('sample_write.txt','This is the 6th line \n',(err)=>{
    if (err)
    {
        console.log(err)
    }
    else {
        console.log('File got appended')
    }
})
fs.readFile('sample_write.txt',(err,data)=>{
    if(err){
        console.log(err)
    }
    else {console.log(data.toString())}
})