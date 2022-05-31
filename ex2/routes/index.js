var express = require('express');
var router = express.Router();
var axios = require('axios')




/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});



router.get('/classes', function(req, res, next) {
  axios.post('http://clav-api.di.uminho.pt/v2/users/login', {"username": "rpcw2022@gmail.com", "password": "2022"})
    .then(dados => {
        var token = dados.data.token

        axios.get('http://clav-api.di.uminho.pt/v2/classes?nivel=1&token=' + token)
            .then(classes =>{
              res.render('classes', {classe: classes.data});
            })
            .catch(e => {
               res.render('error',{error:e})
            })
    })
    .catch(e => {
       res.render('error',{error:e})
    })
});


router.get('/classes/:id', function(req, res) {
  axios.post('http://clav-api.di.uminho.pt/v2/users/login', {"username": "rpcw2022@gmail.com", "password": "2022"})
    .then(dados => {
        var token = dados.data.token
        axios.get('http://clav-api.di.uminho.pt/v2/classes/c' + req.params.id + '?token=' + token)
            .then(classe =>{
              res.render('classe', {c: classe.data});
            })
            .catch(e => {
                console.log('Erro: não consegui obter dados! ' + e)
            })
    })
    .catch(e => {
        console.log('Erro: não consegui obter dados! ' + e)
    })
});

router.get('/termosIndice', function(req, res) {
  axios.post('http://clav-api.di.uminho.pt/v2/users/login', {"username": "rpcw2022@gmail.com", "password": "2022"})
    .then(dados => {
        var token = dados.data.token

        axios.get('http://clav-api.di.uminho.pt/v2/termosIndice?token=' + token)
            .then(indices =>{
              res.render('termosIndice', {termosIndice: indices.data});
            })
            .catch(e => {
               res.render('error',{error:e})
            })
    })
    .catch(e => {
       res.render('error',{error:e})
    })
});

module.exports = router;
