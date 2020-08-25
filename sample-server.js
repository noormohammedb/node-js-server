const http = require('http');

http.createServer((req,res)=>{
    console.log("reqursted : " + req.connection.remoteAddress)
    res.write("Hello World!");
    res.end();
}).listen(3000);