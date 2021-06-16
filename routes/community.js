const express = require('express');
const router = express.Router();
const db = require("../models")


router.get('/community', (req, res)=>{
    res.render('community');
})

router.post('/community', async (req, res)=>{
    try{
        console.log('made it')
        //get information from header 
        let {title, description} = req.body;
        //store title, description inside database
        let result = await db.categories.create({
        title: title,
        description: description
        })
        res.render('index')
        console.log(result)
    }
    catch(error){
        res.send(error)
    }
})

module.exports = router