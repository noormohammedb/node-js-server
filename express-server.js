const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use((bodyParser.urlencoded({extended:true})),(req,res,next) => {
    console.log('Requesting from ' + req.connection.remoteAddress + ' For : ' + req.url);
    res.set({'content-type':'text/html'});
    next();
})

app.get('/',(req,res,next) => {
    res.status(200).sendFile(path.join(__dirname,'index.html'));
    next();
});

app.get('/login',(req,res,next) => {
    console.log('incoming data\nwho : ' + req.query.who + '\nmessage : ' + req.query.message);
    res.status(200).sendFile(path.join(__dirname,'login.html'));
    next();
});

app.get('/favicon.ico',(req,res,next) => {
    res.end()
});

app.use((req,res) => {
    console.log("request completed\n");
});


app.listen(port,() => {
    console.log("server listening at port : " + port);
});