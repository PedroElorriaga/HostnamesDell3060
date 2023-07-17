const { Console } = require('console')
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

        if (hostInstance.errors.length > 0) {
            req.flash('errors', hostInstance.errors)
            return res.redirect('/hostnames')
        }

        req.flash('sucesso', `O equipamento ${req.body.numeroSerie} foi cadastrado com sucesso!`)
        return res.redirect(`/`)

    } catch (err) {
        res.render('includes/404')
        console.log('ERRO: ' + err)
    }
}

exports.edicao = async (req, res) => {
    if (!req.params.id) {
        return res.render('includes/404')
    }

    const dados = await Hosts.procurarPeloId(req.params.id)

    res.render('hosts', {
        titulo: 'Edição de equipamento',
        hosts: dados
    })
}

exports.edicaoUpdate = async (req, res) => {
    try {
        const dados = new Hosts(req.body)
        await dados.atualizarEquipamento(req.params.id)

        if (dados.errors.length > 0) {
            req.flash('errors', dados.errors)
            return res.redirect(`/hostnames/edit/${req.params.id}`)
        }

        req.flash('sucesso', `O equipamento ${req.body.numeroSerie} foi atualizado com sucesso!`)
        return res.redirect('/')

    } catch (err) {
        res.render('includes/404')
        console.log('ERRO: ' + err)
    }
}

exports.excluir = async (req, res) => {
    try {
        const dados = new Hosts(req.body)
        await dados.deletarEquipamento(req.params.id)

        if (dados.errors.length > 0) {
            req.flash('errors', dados.errors)
            return res.redirect('/')
        }

        req.flash('sucesso', `O equipamento foi deletado com sucesso!`)
        return res.redirect('/')

    } catch (err) {
        res.render('includes/404')
        console.log('ERRO ' + err)
    }
}