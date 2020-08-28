const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/',(req,res) => {
    res.sendFile(path.join("/index.html"));
})

app.get('/login',(req,res) => {
    res.send("login");
})

app.listen(port,()=>{
    console.log(__dirname);
    console.log(__filename);
    console.log('server started at port : ' + port);
})
