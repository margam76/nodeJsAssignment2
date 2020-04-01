const express = require('express')
const fs = require('fs')

const app = express();
const port=6500

app.get('/',(req,res)=>{
    res.send('<h1>Welcome to express server</h1>')
})

app.get('/package',(req,res)=>{
fs.readFile('package.json',(err,data)=>{
    if(err){
        console.err(err)
    }
    else{
        res.send(JSON.parse(data))
    }
})
})

app.listen(port,(err)=>{
    console.log('server is running on port :' +port)
})
