const app = require('express').Router()
const auth = require('../middleware/auth')
const profileController = require('../controller/profile.controller')

// MVC
app.get('/profile',auth, profileController.profile );
app.post('/deleteProfilePost', profileController.deleteProfilePost);
app.post('/editProfilePost', profileController.editProfilePost);

module.exports = app;