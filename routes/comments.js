const express = require('express');
const router = express.Router();
const db = require("../models");
const formatPost = require('../utils/formatPost');
const formatComments = require('../utils/formatComments');

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


module.exports = router

