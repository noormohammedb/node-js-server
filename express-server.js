const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.get('/',(req,res) => {
    res.send("Hello World");
})

app.get('/login',(req,res) => {
    res.send("login");
})

app.listen(port,()=>{
    console.log('server started at port : ' + port);
})
