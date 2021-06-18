const express = require('express');
const router = express.Router();
const db = require("../models");
const formatPost = require('../utils/formatPost');
const formatComments = require('../utils/formatComments');

router.get('/:categoryname/comments/:postid/:postname', async (req, res)=>{
    const post = await db.posts.findByPk(req.params.postid, { include:[
        { 
            model: db.users,
            attributes: ['first_name', 'last_name', 'id'],
            required: true
        }
    ]})
    const comments = await db.comments.findAll({ 
        where: { postID: req.params.postid },
        order: [
            ["createdAt","DESC"]
        ],
        include: [
            { 
                model: db.users,
                attributes: ['first_name'],
                required: true
            }
    ]})

    const formattedPost = formatPost(post);
    const formattedComments = formatComments(comments);

    res.render("comments", {
        formattedPost,
        formattedComments
    });
})

router.post('/:categoryname/comments/:postid/:postname', async (req, res)=>{
    try{
        console.log('made it')
        //get replies from comments  
        let {reply} = req.body;
        //store replies inside database
        let replies = await db.posts.create({
            //when you have a : you have to use req.params
        postID: req.params.postid,
        body: reply
        })
        console.log(req.body)
    }


    catch(error){
        res.send(error)
    }
})

module.exports = router

