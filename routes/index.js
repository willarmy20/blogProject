const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../models');
const authReq = require('../middleware/auth')

router.get('/', authReq, async (req, res)=>{
    console.log(req.user);
    const records = await db.posts.findAll({ include: [
        { 
            model: db.users,
            attributes: ['first_name'],
            required: true
        },
        { 
            model: db.categories,
            attributes: ['title'],
            required: true
        }
    ]});
    console.log(records);
    res.render('index');
})


module.exports = router