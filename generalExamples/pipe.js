const fs = require('fs')
const http = require('http')


//var writeStream = fs.createWriteStream('pipe.txt')
//readStream.pipe(writeStream);

http.createServer((req, res) => {
  // res.writeHead(200,{'Content-Type': 'text/plain'}) -- to display text on the browser
  // res.writeHead(200,{'Content-Type': 'text/html'}) -- to render HTML on the browser
  console.log('requested url : ' + req.url);
  if (req.url === '/home' || req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.createReadStream('index.html').pipe(res);
  } else if (req.url === '/api') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    var jsonObj = { name: 'max', surname: 'tesar', age: 26 }
    var empjsonObj = 'http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees'
    res.end(JSON.stringify(empjsonObj))
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.createReadStream('about.html').pipe(res);
  } else{
    res.writeHead('404',{'Content-Type':'text/html'})
    fs.createReadStream('404.html').pipe(res);
  }
  //var readStream = fs.createReadStream('employee.txt','utf8') 
  
  //  res.end('Hello World')
}).listen(3000);

console.log("server is running on http://127.0.0.1:3000/")