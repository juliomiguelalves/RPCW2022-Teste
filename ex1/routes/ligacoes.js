var express = require('express');
var router = express.Router();
var Cidade = require('../controllers/cidade')
var Ligacao = require('../controllers/ligacao')

router.get('/ligacoes', function(req, res, next) {
    if(req.query["origem"]){
        Ligacao.findOrigem(req.query["origem"])
            .then(dados=>res.status(200).jsonp(dados))
            .catch(error => res.status(500).jsonp(error))
    }
    else if (req.query["dist"]){

    }
  });