const Hosts = require('../models/HostsModel')

exports.index = async (req, res) => {
    const equipamentos = await Hosts.buscarEquipamentos()

    res.render('index', {
        titulo: 'Hostnames DELL 3060',
        equipamentos
    })
}
