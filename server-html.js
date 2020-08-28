const http = require("http");
const fs = require("fs");

const port = 3000;
http.createServer((req,res)=>{
    let page = fs.readFile("index.html",(err,data)=>{
        console.log("Reqursting " + req.connection.remoteAddress);
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(data);
        res.end();
    });
}).listen(port,()=>{
    console.log("Server is running at : " + port);
});