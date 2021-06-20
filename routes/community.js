const express = require('express');
const router = express.Router();
const db = require("../models")
const formatCommunities = require('../utils/formatCommunities');
const formatPosts = require('../utils/formatPosts');

router.get('/community/:name/:id', async (req, res)=>{
    const posts = await db.posts.findAll({
        where: { categoryID: req.params.id },
        include: [
            { 
                model: db.users,
                attributes: ['first_name'],
                required: true
            }
        ]
    });

    const formattedPosts = formatPosts(posts, req.params.name);
    
    res.render('community', {
        formattedPosts,
        communityName: req.params.name,
        communityId: req.params.id
    });
})

router.get('/communityList/:number', async (req, res) => {
    try {
        const communities = await db.categories.findAll();
        const randomizedCommunities = [];
        let length = req.params.number;

        if(length > communities.length) {
            length = communities.length;
        }

        for(let index = 0; index < length; index++){
            const randomCommunity = communities.splice(Math.floor(Math.random() * communities.length), 1);
            randomizedCommunities.push(randomCommunity[0]);
        }

        const formattedCommunities = formatCommunities(randomizedCommunities);
        const sortedCommunities = formattedCommunities.sort((a, b) => {
            const com1 = a.title.toUpperCase();
            const com2 = b.title.toUpperCase();
            if (com1 < com2) {
                return -1;
            }
            if (com1 > com2) {
                return 1;
            }
            return 0;
        });

        res.json({ communities: sortedCommunities });
    }
    catch (err) {
        console.log(err);
    }
});

module.exports = router