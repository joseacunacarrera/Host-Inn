const express = require('express');
const router = express.Router();

const passport = require('passport');

router.get('/signup', (req, res) => {
    res.render('autenticacion/signup')
}); 

router.post('/signup', passport.authenticate('local.signup', {
    successRedirect: '/perfil',
    failureRedirect: '/signup',
    failureFlash: true
}));

router.post('/login', (req, res, next) => {
    passport.authenticate('local.login', {
        successRedirect: '/perfil',
        failureRedirect: '/login',
        failureFlash: true  
    })(req, res, next);
});

router.get('/login', (req, res) => {
    res.render('autenticacion/login')
});

router.get('/perfil', (req, res) => {
    res.send('Su Perfil');
})

module.exports = router;
