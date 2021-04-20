const postsModel = require('../models/posts.model')

module.exports.profile = async (req, res) => {
    let posts = await postsModel.find({userID: req.session.userID}).populate('userID')
    res.render('profile', { isLoggedIn: req.session.isLoggedIn, posts,userName: req.session.name,f_name:req.session.f_name,l_name:req.session.l_name });
}

module.exports.deleteProfilePost = async (req, res) => {
    await postsModel.findByIdAndDelete({ _id: req.body.delete })
    res.redirect('/profile')
}
module.exports.editProfilePost= async (req, res) => {
    const {_id, title, desc } = req.body
    await postsModel.findByIdAndUpdate({_id},{title,desc})
    res.redirect('/profile')
}