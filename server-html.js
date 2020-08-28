const http = require('http');
const fs = require('fs');
const url = require('url');
const port = 3000;

let server = http.createServer((req,res) => {
    console.log(req.connection.remoteAddress);
    console.log(req.url);
    let req_url = url.parse(req.url);
    // console.log(req_url);
    console.log(req_url.path);
    if(req_url.pathname=='/'){   
        fs.readFile('index.html',(error,data) => {
            res.writeHead(200,{'content-type':'text/html'});
            res.write(data);
            res.end()
        })
    }else if(req_url.pathname=="/login"){
        fs.readFile('login.html',(error,data) => {
            res.writeHead(200,{'content-type':'text/html'});
            res.write(data);
            res.end();
        })
    }else{
        res.writeHead(404);
        res.end("Error");
    }
});

server.listen(port,() => {
    console.log('server listening at port : ' + port);
});