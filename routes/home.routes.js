const app = require('express').Router()
const auth = require('../middleware/auth')
const homeController = require('../controller/home.controler')
// MVC
app.get('/home', auth,homeController.home );
app.post('/addPost', homeController.addPost);
app.post('/deletePost', homeController.deletePost);
app.post('/editPost', homeController.editPost);
app.get('/logout', homeController.logOut);


module.exports = app;