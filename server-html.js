const http = require('http');
const fs = require('fs');
const url = require('url');
const port = 3000;

let server = http.createServer((req,res) => {
    console.log(req.connection.remoteAddress);
    console.log(req.url);
    let reqrl = url.parse(req.url,true);
    console.log(reqrl.pathname);
    if(reqrl.pathname == '/'){
        fs.readFile('index.html',(error,data) => {
            res.writeHead(200,{'content-type':'text/html'});
            res.write(data);
            res.end();
        });
    }else if(reqrl.pathname == '/login'){
        fs.readFile('login.html',(error,data) => {
            res.writeHead(200,{'content-type':'text/html'});
            res.write(data);
            res.end();
        });
    }else{
        res.writeHead(404);
        res.end("Error");
    }
});

server.listen(port,() => {
    console.log("Server listening at : " + port);
});