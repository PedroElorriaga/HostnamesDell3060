exports.index = (req, res) => {
    res.render('hosts', {
        titulo: 'Hosts'
    })
}

exports.register = (req, res) => {
    res.send('Working')
}