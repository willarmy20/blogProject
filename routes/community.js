const express = require('express');
const router = express.Router();
const db = require("../models")
const formatCommunities = require('../utils/formatCommunities');


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
        res.redirect('/');
    }
    catch(error){
        res.send(error)
    }
})

// Query a specific
// router.get('/community/:communityName/:pageNumber', async (req, res) => {
//     const communities = await db.categories.findAll({
//         where: { }
//     });
//     const formattedCommunities = formatCommunities(communities);
// })

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

router.get('/communityList/all',async (req, res)=>{
    const communities = await db.categories.findAll();
    res.json(communities);
})

module.exports = router