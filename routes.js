const express = require('express')
const route = express.Router()
// IMPORTAÇÕES DOS CONTROLLERS
const homeController = require('./src/controllers/homeController')
const loginController = require('./src/controllers/loginController')
const cadastroController = require('./src/controllers/cadastroController')
const hostsController = require('./src/controllers/hostsController')

// MIDDLEWARE LOCAL
const { usuarioEditor, usuarioLogado } = require('./src/middlewares/middleware')

// HOME
route.get('/', homeController.index)

// LOGIN
route.get('/login', loginController.index)
route.post('/login/success', loginController.login)
route.get('/logout', loginController.logout)


// CADASTRO
route.get('/cadastro', cadastroController.index)
route.post('/cadastro/register', cadastroController.register)


// HOSTS
route.get('/hostnames', usuarioEditor, hostsController.index)
route.post('/hostnames/register', usuarioEditor, hostsController.register)
route.get('/hostnames/edit/:id', usuarioEditor, hostsController.edicao)
route.post('/hostnames/edit/update/:id', usuarioEditor, hostsController.edicaoUpdate)
route.get('/hostnames/remove/:id', usuarioEditor, hostsController.excluir)


//EXPORTANDO MODULO
module.exports = route 
