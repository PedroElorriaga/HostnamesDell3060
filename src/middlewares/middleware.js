exports.flashMessagesMiddleware = (req, res, next) => {
    res.locals.errors = req.flash('errors')
    res.locals.sucesso = req.flash('sucesso')
    next()
}

exports.usuarioLogado = (req, res, next) => {
    res.locals.user = req.session.user
    next()
}

exports.checkCsrfError = (err, req, res, next) => {
    if (err) {
        console.log(err)
        return res.render('../views/includes/404')
    }
    next()
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
}

exports.usuarioEditor = (req, res, next) => {
    if (!req.session.user) {
        req.flash.errors = req.flash('errors', 'Você precisa fazer login primeiro')
        return res.redirect('/login')
    }
    next()
}