const Hosts = require('../models/HostsModel')
const path = require('path')

exports.index = (req, res) => {
    res.render('hosts', {
        titulo: 'Hostnames',
        hosts: {}
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
        return res.redirect(`/hostnames/index/${hostInstance.hosts._id}`)
    }catch(err) {
        res.render('../views/includes/404.ejs')
        console.log('ERRO: ' + err)
    }
}

exports.cadastro = async (req, res) => {
    if(!req.params.id){
        return res.render('../views/includes/404.ejs')
    }

    const dados = await Hosts.procurarPeloId(req.params.id)

    if(!dados) {
        return res.render('../views/includes/404.ejs')
    }
    res.render('../views/hosts.ejs', {
        titulo: 'Edição de hosts',
        hosts: dados
    })
}

exports.edicao = async(req, res) => {
    if(!req.params.id){
        return res.render('../views/includes/404.ejs')
    }
}