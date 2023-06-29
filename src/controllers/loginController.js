const Login = require('../models/LoginModel')

exports.index = (req, res) => {
    res.render('login', {
        titulo: 'Login',
    })
}
