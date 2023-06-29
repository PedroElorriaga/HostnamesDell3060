// EXPORTANDO RESPOSTA DA PÁGINA INICIAL
exports.index = (req, res) => {

    res.render('index', {
        titulo: 'Hostnames DELL 3060'
    })
}
