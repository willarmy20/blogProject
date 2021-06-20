const express = require('express');
const router = express.Router();
const passport = require('passport');


router.get('/login', async (req, res) => {
    res.render('login', { authFailed: false });
});

router.get('/loginFailed', async (req, res) => {
    res.render('login', { authFailed: true });
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
})

router.post('/login', passport.authenticate('local', { failureRedirect: '/loginFailed' }), async (req, res) => {
    res.redirect('/')//after login take me to index
});

module.exports = router;