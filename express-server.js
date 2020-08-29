const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.get('/',(req,res) => {
    console.log(req.connection.remoteAddress);
    res.sendFile(path.join(__dirname,'index.html'));
});
app.get('/login',(req,res) => {
    console.log(req.connection.remoteAddress);
    // console.log(req.);
    res.sendFile(path.join(__dirname,'login.html'));
});

app.listen(port,() => {
    console.log("server listening at port : " + port);
});