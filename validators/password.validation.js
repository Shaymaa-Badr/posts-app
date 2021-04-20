const { check } = require('express-validator')

module.exports= [
    check('newPassword').matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&8-]).{8,}$/),
    check('confPassword').custom((value, { req }) => {
      if (value !== req.body.newPassword) {
       return false
      }
      return true;
    }),
  ]