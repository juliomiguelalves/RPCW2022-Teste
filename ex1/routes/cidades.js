var express = require('express');
var router = express.Router();
var Cidade = require('../controllers/cidade')
var Ligacao = require('../controllers/ligacao')

/* GET home page. */
router.get('/cidades', function(req, res, next) {

  if(req.query["distrito"]){
    Cidade.porDistrito(req.query["distrito"])
    .then(dados => res.status(200).jsonp(dados))
      .catch(error => res.status(500).jsonp(error))
  }
  else{
  Cidade.listar()
      .then(dados => res.status(200).jsonp(dados))
      .catch(error => res.status(500).jsonp(error))
  }
});

router.get('/cidades/nomes', function(req, res, next) {
  Cidade.listarNomes()
      .then(dados => res.status(200).jsonp(dados))
      .catch(error => res.status(500).jsonp(error))
});

router.get('/cidades/:id', function(req, res, next) {
  Cidade.procurarPorID(req.params.id)
      .then(dados => res.status(200).jsonp(dados))
      .catch(error => res.status(500).jsonp(error))
});

router.get('/distritos', function(req, res, next) {
  Cidade.distritos()
      .then(dados => res.status(200).jsonp(dados))
      .catch(error => res.status(500).jsonp(error))
});




module.exports = router;
