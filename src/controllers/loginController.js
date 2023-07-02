const Login = require('../models/LoginModel')

exports.index = (req, res) => {
    res.render('login', {
        titulo: 'Login',
    })
}

exports.register = (req, res) => {
    res.send(req.body)
}