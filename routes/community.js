const express = require('express');
const router = express.Router();
const db = require("../models")


router.get('/community', (req, res)=>{
    res.render('community');
})

router.post('/community', async (req, res)=>{
    try{
        //get information from header 
        let {title, description} = req.body;
        //store title, description inside database
        let result = await db.categories.create({
        title: title,
        description: description
        })
        res.render('index')
    }
    catch(error){
        res.send(error)
    }
})

router.get('/community/all',async (req, res)=>{
    let community = await db.categories.findAll()
    res.json(community)
})

module.exports = router