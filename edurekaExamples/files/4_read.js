var fs = require('fs')

fs.readFile('sample_write.txt',(err,data)=>{
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log('The data is:',data.toString())
    }
})