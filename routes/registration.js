const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const db = require('../models');

router.get('/registration', (req, res) => {
    res.render('registration');
});

router.post('/register', async (req, res)=>{
    try{
    const { first_name, last_name, username, password } = req.body
    
    const persistedUser = await db.users.findAll({
        where:{
            email: username
        }
    });
    
    if(persistedUser.length === 0){
        const passwordEncrypted = bcrypt.hashSync(password, 8);
        const result = await db.users.create({
            first_name: first_name,
            last_name: last_name,
            email: username,
            password: passwordEncrypted
        });
        res.redirect('/login');
    } else {
        res.render('registration',{
            userExist: true
        });
    }
    } catch (err) {
        res.send(err);
    }
});

module.exports = router