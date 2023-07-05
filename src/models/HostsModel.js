const mongoose = require('mongoose')

const HostsSchema = new mongoose.Schema({
    numeroSerie: { type: String, required: true },
    hostName: { type: String, required: true },
    mac: { type: String, required: false },
    status: { type: String, required: true } 
    
})

const HostsModel = mongoose.model('Hosts', HostsSchema)

// TODO concluir classe Hosts e criar o CRUD
class Hosts {
    constructor(body){
        this.body = body,
        this.errors = [],
        this.hosts = null
    }

    register() {
        this.valida()
    }

    valida() {
        this.dadosLimpos()
    }

    dadosLimpos() {
        this.body = {
            
        }
    }
}

module.exports = Hosts