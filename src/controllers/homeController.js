// EXPORTANDO RESPOSTA DA PÁGINA INICIAL
exports.index = (req, res) => {

    res.render('index', {
        titulo: 'Hostnames DELL 3060'
    })
}

exports.recebidos = (req, res) => {
    res.send(req.body.message + req.body._csrf)
}