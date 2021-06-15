const express = require('express');
const router = express.Router();
const authReq = require('../middleware/auth')

router.get('/', authReq, (req, res)=>{
    console.log(req.user);
    res.render('index');
})


module.exports = router