const express = require('express');
const router = express.Router();
const db = require('../models');
const formatRecords = require('../utils/formatRecords');

router.get('/', async (req, res)=>{
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

    const formattedRecords = formatRecords(records);
    formattedRecords.reverse();

    res.render('index', {
        formattedRecords
    });
})

module.exports = router