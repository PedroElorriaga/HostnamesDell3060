const mongoose = require('mongoose')

const HostsSchema = new mongoose.Schema({
    numeroSerie: { type: String, required: true },
    hostName: { type: String, required: true },
    mac: { type: String, required: false },
    status: { type: String, required: true },
    criadoEm: { type: Date, default: Date.now }
})

const HostsModel = mongoose.model('Hosts', HostsSchema)

// TODO concluir classe Hosts e criar o CRUD - CRIAR FEITO!
class Hosts {
    constructor(body){
        this.body = body,
        this.errors = [],
        this.hosts = null
    }

    async register() {
        this.valida()

        if(this.errors.length > 0) return

        await HostsModel.create(this.body)
    }

    valida() {
        this.dadosLimpos()

        if(this.body.mac == ''){
            this.errors.push('O Mac Address não pode estar vázio')
            return
        }
        
    }

    dadosLimpos() {
        for(let key in this.body){
            if(typeof this.body[key] !== 'string') {
                this.body[key] = ''
            }
        }

        this.body = {
            numeroSerie: this.body.numeroSerie,
            hostName: this.body.hostname,
            mac: this.body.mac,
            status: this.body.status
        }
    }
}

module.exports = Hosts