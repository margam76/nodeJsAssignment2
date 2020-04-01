/*const http = require('http');
const hostname = '127.0.0.1';
const port = 5500;
const server = http.createServer((req,res)=>{
res.statusCode = 200;
res.setHeader('Content-Type','text/plain')
res.end('Hello World\n')
})

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
}) */

const http = require('http');
const body = "This is the length of te body"
const bodylength = body.length;
console.log("Length of the body is :" + bodylength);
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type' : 'text/plain', 'Content-Length' : 'bodylength'})
res.end(body);
}).listen(3000);

console.log("Server is running on http://127.0.0.1:3000");

console.log("Length of the body is :" + bodylength);