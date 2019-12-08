const express = require('express');
const app = express();

app.use(express.static('./'));

app.listen(3000, ()=>{
    console.log('http://127.0.0.1:3000');
})
