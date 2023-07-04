exports.flashMessagesMiddleware = (req, res, next) => {
    res.locals.errors = req.flash('errors')
    res.locals.sucesso = req.flash('sucesso')
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