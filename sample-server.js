const http = require('http');

http.createServer(server).listen(3000);

function server(req,res){
    console.log("reqursted : " + req.connection.remoteAddress)
    res.write("Hello World!");
    res.end();
}