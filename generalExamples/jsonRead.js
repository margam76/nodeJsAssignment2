const fs = require('fs')

fs.readFile('json_out.json',(err,data)=>{
    if (err){
        console.log(err)
    }
    else {
        console.log('File read successfully!')
        console.log("As is data: ",data.toString());
        console.log("Parsed Data: ", JSON.parse(data.toString()));
        console.log("Obtaining a property from the parsed data - Title: ",JSON.parse(data).title)
    }
})