const express = require('express')
const route = express.Router()
// IMPORTAÇÕES DOS CONTROLLERS
const homeController = require('./src/controllers/homeController')
const loginController = require('./src/controllers/loginController')
const cadastroController = require('./src/controllers/cadastroController')

// HOME
route.get('/', homeController.index)

// LOGIN
route.get('/login', loginController.index)
route.post('/login/register', loginController.register)

// CADASTRO
route.get('/cadastro', cadastroController.index)

route.post('/recebidos', homeController.recebidos)


//EXPORTANDO MODULO
module.exports = route 