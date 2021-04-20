const postsModel = require('../models/posts.model')
//const userModel = require('../models/user.model')

module.exports.home = async (req, res) => {
    let posts = await postsModel.find({}).populate('userID')
    //userID: req.session.userID
   
  res.render('home', { isLoggedIn: req.session.isLoggedIn, posts,userName: req.session.name });
}
module.exports.addPost = async (req, res) => {
    const { title, desc } = req.body
    await postsModel.insertMany({ userID: req.session.userID, title, desc})
    
    res.redirect('/home')
}
module.exports.deletePost = async (req, res) => {
    await postsModel.findByIdAndDelete({ _id: req.body.delete })
    res.redirect('/home')
}
module.exports.editPost= async (req, res) => {
    const {_id, title, desc } = req.body
    await postsModel.findByIdAndUpdate({_id},{title,desc})
    res.redirect('/home')
}

module.exports.logOut = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login')
    })

}