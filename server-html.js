const http = require('http');
const fs = require('fs');
const port = 3000;

let server = http.createServer((req,res) => {
    console.log(req.connection.remoteAddress);
    console.log(req.url);
    if(req.url=='/'){   
        fs.readFile('index.html',(error,data) => {
            res.writeHead(200,{'content-type':'text/html'});
            res.write(data);
            res.end()
        })
    }else if(req.url==="/login"){
        res.end("Login");
    }else{
        res.writeHead(404);
        res.end("Error");
    }
});

server.listen(port,() => {
    console.log('server listening at port : ' + port);
});