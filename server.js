// CONFIGURAÇÃO .ENV
require('dotenv').config()


// IMPORTAÇÕES
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes') // ROTAS DA APLICAÇÃO EX: /HOME /RECEBIDOS
const path = require('path')
const { flashMessagesMiddleware, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware')
const MongoStore = require('connect-mongo') // SESSÕES SÃO SALVAS NA BASE DE DADOS
const helmet = require('helmet')
const csrf = require('csurf') // TOKENS PARA FORMULÁRIOS 
const session = require('express-session') // COOKIES
const flash = require('connect-flash') // MENSAGENS PROVISÓRIAS


// INICIANDO EXPRESS APP
const app = express()


// ANALISAR ARQUIVOS JSON
app.use(express.urlencoded({ extended: true })) // UTILIZAÇÃO DO REQ.BODY
app.use(express.json())


// RECURSOS DE SEGURANÇA
app.use(helmet())
app.use(csrf())


// VIEW ENGINE - EJS
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.resolve(__dirname, 'public'))) 


// CONEXÃO MONGODB
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Base de dados conectada...')
        app.emit('connection')
    })
    .catch(e => console.log('ERRO: ' + e))


// COOKIES E SESSÃO
const sessionOptions = session({
    secret: 'Qaulquer informação',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60, // 1 minuto
        httpOnly: true
    }
})
app.use(sessionOptions)
app.use(flash())


// MIDDLEWARES
app.use(flashMessagesMiddleware)
app.use(csrfMiddleware)
app.use(checkCsrfError)


// ROTAS
app.use(routes) 


// INICIALIZAÇÃO DA APLICAÇÃO
app.on('connection', () => {
    app.listen(3000, () => {
        console.log('Servidor sendo executado na porta: 3000')
        console.log('Acessar http://localhost:3000')
    })
})
