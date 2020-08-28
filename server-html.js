const http = require('http');
const fs = require('fs');
const port = 3000;

let server = http.createServer((req,res) => {
    console.log(req.url);
    fs.readFile('index.html',(error,data) => {
        console.log(req.connection.remoteAddress);
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        res.end()
    })
});

server.listen(port,() => {
    console.log('server listening at port : ' + port);
});