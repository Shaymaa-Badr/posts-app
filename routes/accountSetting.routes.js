const app = require('express').Router()
const auth = require('../middleware/auth')
const validation = require('../validators/password.validation')
const settingController = require('../controller/account.controller')
// MVC
app.get('/accountSetting', auth,settingController.accountSetting);
app.post('/changePassword', validation,settingController.changePassword);


module.exports = app;