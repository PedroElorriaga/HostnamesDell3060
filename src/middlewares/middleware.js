exports.middlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash('errors')
    res.locals.sucesso = req.flash('sucesso')
    next()
}

exports.checkCsrfError = (err, req, res, next) => {
    if (err) {
       return res.render('../views/includes/404')
    }

    next()
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
}