// CONFIGURAÇÃO .ENV
require('dotenv').config()


// IMPORTAÇÕES
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes') // ROTAS DA APLICAÇÃO EX: /HOME /RECEBIDOS
const path = require('path')
const { flashMessagesMiddleware, usuarioLogado, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware')
const MongoStore = require('connect-mongo') // SESSÕES SÃO SALVAS NA BASE DE DADOS
const helmet = require('helmet')
const csrf = require('csurf') // TOKENS PARA FORMULÁRIOS 
const session = require('express-session') // COOKIES
const flash = require('connect-flash') // MENSAGENS PROVISÓRIAS


// INICIANDO EXPRESS APP
const app = express()
const PORT = 3000


// CONEXÃO MONGODB
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Base de dados conectada...')
        app.emit('connection')
    })
    .catch(e => console.log('ERRO: ' + e))

    
// ANALISAR ARQUIVOS JSON
app.use(express.urlencoded({ extended: true })) // UTILIZAÇÃO DO REQ.BODY
app.use(express.json())


// COOKIES E SESSÃO
app.use(session({
    secret: 'dlcodjjiencifssda',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000 * 60, // 1 hora
    }
}))

app.use(flash())


// RECURSOS DE SEGURANÇA
app.use(helmet())
app.use(csrf())


// VIEW ENGINE - EJS
app.use(express.static(path.resolve(__dirname, 'public'))) 
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')


// MIDDLEWARES
app.use(flashMessagesMiddleware)
app.use(usuarioLogado)
app.use(checkCsrfError)
app.use(csrfMiddleware)


// ROTAS
app.use(routes) 


// INICIALIZAÇÃO DA APLICAÇÃO
app.on('connection', () => {
    app.listen(PORT, () => {
        console.log('Servidor sendo executado na porta: ' + PORT)
        console.log(`Acessar http://localhost:${PORT}`)
    })
})
