const passport = require('passport');
const { Strategy:LocalStrategy } = require('passport-local');
const bcrypt = require('bcryptjs');
const db = require('../models');



module.exports = function(req,res,next) {
    passport.use('local', new LocalStrategy( {
        usernameField : 'username',
        passwordField : 'password'
    }, async (username, password, done) => {
        console.log("local strategy called");
        try {
        // Find all instances of user
        const records = await db.users.findAll({ where: { email: username }});
        console.log('records: ',records)
        if(records.length !== 0){
            // Record will hold user info
            const record = records[0];
            // Check Password
            bcrypt.compare(password, record.password, (err, response) => {
            if(response){
                // PW: Match
                done(null, {id: record.id, username: record.email});
            } else {
                // PW: No Match
                done(null, false, { message: 'Incorrect username.' });
            }
            });
        }
        }
        catch(err){
        console.log(err);
        }
    }));
    passport.serializeUser((user, done) => {
        console.log('serialUser');
        console.log(user);
        done(null, user.id);
        // done(null, user);
    });
    passport.deserializeUser((id, done) => {
        console.log('deserializeUser');
        console.log(id)
        done(null, "");
    });
}

