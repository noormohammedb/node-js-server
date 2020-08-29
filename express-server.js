const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use((req,res,next) => {
    console.log(req.connection.remoteAddress);
    next();
})

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'index.html'));
});
app.get('/login',(req,res) => {
    res.sendFile(path.join(__dirname,'login.html'));
});

app.listen(port,() => {
    console.log("server listening at port : " + port);
});