const Login = require('../models/CadastroModel')

exports.index = (req, res) => {
    res.render('login', {
        titulo: 'Login',
    })
}

exports.login = async (req, res) => {
    try {
        const loginInstance = new Login(req.body)
        await loginInstance.loginUsuario()

        if (loginInstance.errors.length > 0){
            req.flash('errors', loginInstance.errors)
            req.session.save(function() {
                return res.redirect('/login')
            })
            return
        }
        res.send(req.body)
    } catch (err) {
        console.log(err)
        res.render('../views/includes/404.ejs')
    }
}