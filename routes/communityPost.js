const express = require('express');
const router = express.Router();
const db = require("../models")

router.get('/communityPost', (req, res)=>{
  res.render('communityPost');
})

router.post('/communityPost', async (req, res)=>{
  try{
      //get information from header 
      let {title, description} = req.body;
      //store title, description inside database
      let result = await db.categories.create({
      title: title,
      description: description
      })
      res.redirect('/');
  }
  catch(error){
      res.send(error)
  }
})

module.exports = router;