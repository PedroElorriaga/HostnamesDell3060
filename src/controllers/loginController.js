const Login = require('../models/CadastroModel')

exports.index = (req, res) => {
    if (req.session.user) return res.render('../views/logado.ejs')
    
    return res.render('login', {
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
        req.flash('sucesso', 'Você fez o login com sucesso!')
        req.session.user = loginInstance.user
        req.session.save(function (){
            return res.redirect('/')
        })
    } catch (err) {
        console.log(err)
        res.render('../views/includes/404.ejs')
    }
}

exports.logout = (req, res) => {
    req.session.destroy()
    res.redirect('/')
}