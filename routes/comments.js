const express = require('express');
const router = express.Router();
const db = require("../models");

router.get('/comments', (req,res)=>{
    res.render('comments');
})



router.get('/:categoryname/comments/:postid/:postname', async (req, res)=>{
    const post = await db.posts.findByPk(req.params.postid, { include:[
        { 
            model: db.users,
            attributes: ['first_name'],
            required: true
        }
    ]})
    const comments = await db.comments.findAll({ 
        where: { postID: req.params.postid },
        order: [
            ["createdAt","DESC"]
        ]
    })
    console.log(comments);

    res.render("comments");
})



module.exports = router

