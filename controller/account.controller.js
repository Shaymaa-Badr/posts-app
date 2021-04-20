const userModel = require('../models/user.model')
const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt');

module.exports.accountSetting = async (req, res) => {
    res.render('accountSetting', { errors: req.flash('errors'), userName: req.session.name, incorrect: req.flash('wrong') });
}

module.exports.changePassword = async (req, res) => {
    const { oldPassword, newPassword, confPassword } = req.body
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        let user = await userModel.findOne({ _id: req.session.userID })
        const match = await bcrypt.compare(oldPassword, user.password);
        if (match) {
            bcrypt.hash(newPassword, 7, async function (err, hash) {
                await userModel.findByIdAndUpdate({ _id: req.session.userID }, { password: hash })
                res.redirect('/logOut')
            });
        }
        else {
            req.flash('wrong', true)
            res.redirect('/accountSetting')
        }
    }
    else {
        req.flash('errors', errors.array())
        res.redirect('/accountSetting')
    }
}


