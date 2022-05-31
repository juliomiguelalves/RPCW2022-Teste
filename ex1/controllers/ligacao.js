var Ligacao = require('../models/ligacao')
const mongoose = require('mongoose')
var Cidade = require('../models/cidade')


module.exports.findOrigem = (origin) => {
    return Ligacao
        .aggregate([
            {$match:{origem:origin}},
            {$lookup:{
                from:"cidades",
                localField:"origem",
                foreignField:"id",
                as:"destino"
            }}
            
        ])
        .exec()
}