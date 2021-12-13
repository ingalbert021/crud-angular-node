'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3000;

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/api_rest_registros', {useNewUrlParser: true })
//mongodb://localhost:27017/api_rest_registros
//mongodb+srv://crud:crud@crud.odd9t.mongodb.net/crud?retryWrites=true&w=majority
.then(() => {
			console.log('la conexion a la base de datos se a realizado bien!!');

//crear servidor y escuchar peticiones http

app.listen(port, () => {
	console.log('servidor corriendo en http://localhost:'+port);
});


});