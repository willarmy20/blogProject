const express = require('express');
const app = express();
let port = 3000;


//public
app.use(express.static('public'));
//views
app.set('view engine','ejs');

app.use(require('./routes/index'));


//server start
let server = app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})