// EXPORTANDO RESPOSTA DA PÁGINA INICIAL
exports.paginaInicial = (req, res) => {

    res.render('index', {
        titulo: 'Hostnames DELL 3060'
    })
}

exports.recebidos = (req, res) => {
    res.send(req.body.message + req.body._csrf)
}

exports.teste = (req, res) => {
    res.render('teste')
}