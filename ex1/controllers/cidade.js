var Cidade = require('../models/cidade')
const mongoose = require('mongoose')


module.exports.listar = () => {
    return Cidade
        .find({},{_id:0,id:1,nome:1,distrito:1})
        .exec()
}

module.exports.procurarPorID = (id) => {
    return Cidade
        .findOne({id:id})
        .exec()
}

module.exports.findNome = (nome) => {
    return Cidade
        .findOne({nome:nome},{_id:0,id:1})
        .exec()
}

module.exports.listarNomes = () => {
    return Cidade
        .distinct('nome')
        .exec()
}

module.exports.porDistrito = (distrito) => {
    return Cidade
        .find({distrito:distrito},{_id:0,id:1,nome:1})
        .exec()
}


module.exports.distritos = () => {
    return Cidade
    .aggregate([
        {$unwind:"$distrito"},
        {$group: { _id: "$distrito", cidades: { $push: {id:"$id",cidade:"$nome"} } }},
        {$project: { _id: 0,distrito: "$_id", cidades: 1 } }
    ])

}
