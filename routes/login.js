const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const app = express();
const db = require('../models');
const passport = require('passport');
const SALT_ROUNDS = 10


router.get('/login', async (req, res) => {
    res.render('login', { authFailed: false });
});
router.get('/loginFailed', async (req, res) => {
    res.render('login', { authFailed: true });
});

router.post('/login', passport.authenticate('local', { failureRedirect: '/loginFailed' }), async (req, res) => {
    res.send('login submitted')
});










module.exports = router