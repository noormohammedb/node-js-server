const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use((req,res,next) => {
    console.log(req.connection.remoteAddress);
    next();
})

app.get('/',(req,res,next) => {
    res.sendFile(path.join(__dirname,'index.html'));
    next();
});

app.post('/',(req,res,next) => {
    res.sendFile(path.join(__dirname,'login.html'));
    next();
});


app.use((req,res) => {
    console.log("request completed");
});


app.listen(port,() => {

    console.log("server listening at port : " + port);
});