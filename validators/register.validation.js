const { check } = require('express-validator')

module.exports= [
  check('f_name').matches(/^[A-Za-z]+([\ A-Za-z-]+)*$/),
  check('l_name').matches(/^[A-Za-z]+([\ A-Za-z-]+)*$/),
    check('user_name').matches(/^[A-Za-z]+([\ A-Za-z-]+)*$/),
    check('email').isEmail(),
    check('password').matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&8-]).{8,}$/),
]
