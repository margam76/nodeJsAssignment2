var fs = require('fs')

fs.writeFile('sample_write.txt','Data written to the file',(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log('text is written in the file successfully')
    }
    
})