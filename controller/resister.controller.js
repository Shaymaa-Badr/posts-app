const { validationResult } = require('express-validator')
const userModel = require('../models/user.model')
const bcrypt = require('bcrypt');

module.exports.register =  (req, res) => {
    
    res.render('register', { errors: req.flash('errors'), oldInputs: req.flash('oldInputs')[0] , exists:req.flash('exists'),isLoggedIn:false});
}

module.exports.handleSignUp = async (req, res) => {
    const { f_name,l_name,user_name ,email, password } = req.body;
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        let user = await userModel.findOne({ email })
        if (user) {
            req.flash('exists',true)
            res.redirect('/')
        } else {
            bcrypt.hash(password, 7, async function(err, hash) {
                // Store hash in your password DB.
                await userModel.insertMany({ f_name,l_name,user_name, email, password:hash })
                res.redirect('/login')
            });   
        }
    }
    else {
        req.flash('errors', errors.array())
        req.flash('oldInputs', { f_name,l_name,user_name, email, password })
        res.redirect('/')
    }
}