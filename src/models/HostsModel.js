const mongoose = require('mongoose')

// const data = new Date()
// const dataSP = () => {
//     return data.toLocaleString('pt-BR', {timeZone: 'America/Sao_paulo'})
// }

const HostsSchema = new mongoose.Schema({
    numeroSerie: { type: String, required: true },
    hostName: { type: String, required: true },
    mac: { type: String, required: false },
    status: { type: String, required: true },
    criadoEm: { type: Date, default: Date.now() }
})

const HostsModel = mongoose.model('Hosts', HostsSchema)

// TODO concluir classe Hosts e criar o CRUD - CRIAR FEITO! - EXIBIR EM PROGRESSO
class Hosts {
    constructor(body) {
        this.body = body,
            this.errors = [],
            this.hosts = null
    }

    async register() {
        await this.valida()

        if (this.errors.length > 0) return

        this.hosts = await HostsModel.create(this.body)
    }

    async valida() {
        this.dadosLimpos()

        if (this.body.numeroSerie == '') {
            this.errors.push('O SN não pode estar vázio')
        }

        if (this.body.mac == '') {
            this.errors.push('O Mac Address não pode estar vázio')
            return
        }

        const macDuplicado = await HostsModel.findOne({ mac: this.body.mac })

        if (macDuplicado) {
            if (this.body.mac == macDuplicado.mac) {
                this.errors.push('O Mac Address já está cadastrado')
                return
            }
            return
        }
    }

    dadosLimpos() {
        for (let key in this.body) {
            if (typeof this.body[key] !== 'string') {
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

    static async procurarPeloId(id) {
        if (typeof id !== 'string') {
            return
        }

        const dados = await HostsModel.findById(id)
        return dados
    }

    static async buscarEquipamentos() {
        const dados = await HostsModel.find()
        return dados
    }
}

module.exports = Hosts