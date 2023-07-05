const Hosts = require('../models/HostsModel')

exports.index = (req, res) => {
    res.render('hosts', {
        titulo: 'Hosts'
    })
}

exports.register = async (req, res) => {
    try {
        const hostInstance = new Hosts(req.body)
        await hostInstance.register()

        if(hostInstance.errors.length > 0){
            req.flash('errors', hostInstance.errors)
            return res.redirect('/hostnames')
        }
        req.flash('sucesso', 'O equipamento foi cadastrado com sucesso!')
        return res.redirect('/hostnames')
    }catch(err) {
        res.render('../views/includes/404.ejs')
        console.log('ERRO: ' + err)
    }
}