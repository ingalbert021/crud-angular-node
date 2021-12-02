'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RegistroSchema = Schema({


nombre: String,
contenido: String,
descripcion: String,
cantidad: Number, 
date: { type: Date, default: Date.now}


});

module.exports = mongoose.model('Registro', RegistroSchema);
// article --> guarda documentos de este tipo y con esta estructura dentro de la coleccion
