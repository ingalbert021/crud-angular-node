'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3200;

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://crud:crud@crud.k99it.mongodb.net/crud?retryWrites=true&w=majorit', {useNewUrlParser: true })
		.then(() => {
			console.log('la conexion a la base de datos se a realizado bien!!');

//crear servidor y escuchar peticiones http

app.listen(port, () => {
	console.log('servidor corriendo en http://localhost:'+port);
});


});