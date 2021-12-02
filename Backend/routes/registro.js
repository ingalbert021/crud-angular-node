'use strict'

var express = require('express');
var RegistroController = require('../controllers/registro');

var router = express.Router();

router.post('/datos-curso', RegistroController.datosCurso);

router.get('/test-de-controlador', RegistroController.test);



//Rutas utiles
router.post('/save', RegistroController.save);
router.get('/registros/:last?', RegistroController.getRegistros);
router.get('/registro/:id', RegistroController.getRegistro);
router.put('/registro/:id', RegistroController.update);
router.delete('/registro/:id', RegistroController.delete);
router.get('/search/:search', RegistroController.search);


module.exports = router;