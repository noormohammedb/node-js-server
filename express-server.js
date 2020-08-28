const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res) => {
    res.sendFile(__dirname+"/index.html");
})

app.get('/login',(req,res) => {
    res.send("login");
})

app.listen(port,()=>{
    console.log(__dirname);
    console.log(__filename);
    console.log('server started at port : ' + port);
})
