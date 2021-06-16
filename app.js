const express = require('express');
const app = express();
const cookieSession = require('cookie-session');
const keys = require('./config/keys')
const passport = require('passport');
let port = keys.PORT || 3000;

//public
app.use(express.static('public'));
//Cookie-Session
app.use(cookieSession({
    name: 'session',
    keys: [keys.PP_SECRET], 
    maxAge: 14 * 24  * 60 * 60 * 1000
}))
// Passport Init
app.use(passport.initialize());
app.use(passport.session());
require('./config/passportsetup')();
//views
app.set('view engine','ejs');
//BodyParser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(require('./routes/login'));
app.use(require('./routes/registration'));
app.use(require('./routes/'));
app.use(require('./routes/post'));
app.use(require('./routes/community'));





//server start
let server = app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})