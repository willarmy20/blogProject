const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const db = require('../models');
const SALT_ROUNDS = 10

router.get('/registration', (req, res) => {
    res.render('registration');
});

router.post('/register', async (req, res)=>{
    try{
    let {username,password} = req.body
    console.log(req.body)
    let persistedUser = await db.users.findAll({
        where:{
            email: username
        }
    });
    console.log('persistedUser: ',persistedUser);
    
    if(persistedUser.length == 0){
        console.log('made it');
        const passwordEncrypted = bcrypt.hashSync(password, 8);
        console.log(passwordEncrypted);
        const result = await db.users.create({
            email: username,
            password: passwordEncrypted
        });
        res.redirect('/login');
    } else{

        res.render('registration',{
            userExist: true
        })
    }
    } catch (err) {
        res.send(err);
    }
});

module.exports = router