const mongoose = require('mongoose') // REFERENCIA
const validator = require('validator')
const bcrypt = require('bcryptjs')

// DEFINIÇÃO DE SCHEMA
const LoginSchema = new mongoose.Schema({
    email: { type: String, required: true },
    senha: { type: String, required: true },
})

const LoginModel = mongoose.model('Login', LoginSchema)

class Login {
    constructor(body) {
        this.body = body
        this.errors = []
        this.user = null
    }

    async register() {
        this.valida()

        if (this.errors.length > 0) return

        await this.usuarioExistente()

        if (this.errors.length > 0) return

        try {
            const salt = bcrypt.genSaltSync()
            this.body.senha = bcrypt.hashSync(this.body.senha, salt)
            this.user = await LoginModel.create(this.body)
        } catch (err) {
            console.log(err)
        }
    }

    valida() {
        this.cleanUp()

        if (!validator.isEmail(this.body.email)) {
            this.errors.push('E-mail inválido')
        }

        if (this.body.senha.length < 8 || this.body.senha.length > 22) {
            this.errors.push('A senha deve ter entre 8 a 22 caracteres')
            return
        }

        if (this.body.senha !== this.body.senhaRepeat) {
            this.errors.push('As senhas não são conferem')
        }

        return
    }

    cleanUp() {
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = ''
            }
        }

        this.body = {
            email: this.body.user,
            senha: this.body.userPassword,
            senhaRepeat: this.body.userPasswordRepeat,
        }
    }

    async usuarioExistente() {
        const userCheck = await LoginModel.findOne({ email: this.body.email })

        if (userCheck) {
            this.errors.push('Usuário já existe')
        }
    }
}

module.exports = Login