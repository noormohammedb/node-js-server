const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use((bodyParser.urlencoded({extended:false})),(req,res,next) => {
    console.log('Requesting from ' + req.connection.remoteAddress + ' For : ' + req.url);
    next();
})

app.get('/',(req,res,next) => {
    // res.set('Content-Type', 'text/plain');
    // res.status(200);
    res.sendFile(path.join(__dirname,'index.html'));
    next();
});

app.post('/',(req,res,next) => {
    console.log('incoming data\nwho : ' + req.body.who + '\nmessage : ' + req.body.message);
    res.sendFile(path.join(__dirname,'login.html'));
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