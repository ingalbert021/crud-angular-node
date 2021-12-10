'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3000;

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://crud:crud@crud.odd9t.mongodb.net/crud?retryWrites=true&w=majority', {useNewUrlParser: true })

//crear servidor y escuchar peticiones http

app.listen(port, () => {
	console.log('servidor corriendo en http://localhost:'+port);
});


