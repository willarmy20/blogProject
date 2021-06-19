const express = require('express');
const router = express.Router();
const db = require("../models");
const authReq = require('../middleware/auth');


router.get('/post', authReq, (req, res)=>{
    res.render('post');
})

router.post('/post', async (req, res)=>{
    try{
        //get information from header 
        let {title, body, category} = req.body;
        //store title, body inside database
        let result = await db.posts.create({
        userID: parseInt(req.user.id),
        categoryID: parseInt(category),
        title: title,
        body: body
        })
        res.redirect('/')
    }
    catch(error){
        res.send(error)
    }
})

module.exports = router