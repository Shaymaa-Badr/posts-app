const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    f_name:String,
    l_name:String,
    user_name:String,
    email:String,
    password:String,

})

module.exports = mongoose.model('user', userSchema)