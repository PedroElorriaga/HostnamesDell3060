const Login = require('../models/LoginModel')

exports.index = (req, res) => {
    res.render('cadastro', {
        titulo: 'Cadastro',
    })
}

exports.register = async (req, res) => {
    try {
        const loginInstance = new Login(req.body)
        await loginInstance.register()

        if (loginInstance.errors.length > 0) {
            req.flash('errors', loginInstance.errors)
            req.session.save(function () {
                return res.redirect('/cadastro')
            })
            return
        }
        req.flash('sucesso', 'Login criado com sucesso')
        req.session.save(function () {
            return res.redirect('/cadastro')
        })
    } catch (err) {
        console.log(err)
        res.render('../views/includes/404.ejs')
    }
}