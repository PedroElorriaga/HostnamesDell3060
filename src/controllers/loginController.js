const Login = require('../models/LoginModel')

exports.index = (req, res) => {
    res.render('login', {
        titulo: 'Login',
    })
}

exports.register = async function (req, res) {
    try {
        const loginInstance = new Login(req.body)
        await loginInstance.register()

        if (loginInstance.errors.length > 0) {
            req.flash('errors', loginInstance.errors)
            req.session.save(function () {
                return res.redirect('/login')
            })
            return
        }
        res.send(loginInstance.errors)
    } catch (err) {
        console.log(err)
    }

}