'use strict'
var validator = require('validator');
var fs = require('fs');
var path = require('path');
var  Registro = require('../models/registro');


var controller =  { 

datosCurso: (req, res) => {


	return res.status(200).send({
		curso: 'master en frameworks',
		autor: 'alberto de al cruz',
		url: 'victor robles',
		hola
	});
},

test: (req, res) => {
	return res.status(200).send({
message: 'soy la accion test de mi controlador de registros'

	});
},


save: (req, res) => {

	//Recoger parametros por post
      var params = req.body;
    
	//validar datos (validator)
try{


var validator_nombre = !validator.isEmpty(params.nombre);
var validator_contenido = !validator.isEmpty(params.contenido);
var validator_cantidad = validator.isNumeric(params.cantidad);
var validator_descripcion = !validator.isEmpty(params.descripcion);



}catch(err){
		return res.status(200).send({
			status: 'error',
	message: 'Faltan Datos por enviar !!!'

	});
}

if( validator_contenido && validator_cantidad && validator_descripcion && validator_contenido){
		//crear el objecto a guardar
var registro = new Registro();

	//asignar valores
	registro.nombre = params.nombre;
	registro.contenido = params.contenido;
	registro.cantidad = params.cantidad;
	registro.descripcion = params.descripcion;
	



	//guardar el articulo

registro.save((err, registroStored) => {

	if (err || !registroStored) {
		return res.status(404).send({
       status: 'error',
       message: 'El registro no se ha guardado!!!'
		});
	}
//devolver una respuesta
	return res.status(200).send({
		status: 'success',
		registro: registroStored
});
	
	
	});
}else{
	return res.status(200).send({
		status: 'error',
 message: 'los datos no son validos'
	});
}





},

/*Ultimos articulos agregados*/
getRegistros: (req, res) => {
var query = Registro.find({});

	var last = req.params.last;
	if(last || last != undefined){

query.limit(2);

	}
	//find
	query.sort('-_id').exec((err, registro) => { 
		
		if(err){
		return res.status(500).send({
		status: 'error',
		message: 'Error al devolver los articulos!!!'
		});
	}

		if(!registro){
		return res.status(404).send({
		status: 'error',
		message: 'No hay articulos para mostrar!!!'
		});
	}


	return res.status(200).send({
		status: 'success',
		registro
});
	});
	
	},

	getRegistro: (req, res) => {

		//Recoger el id de la url
         var registroId = req.params.id;

		//comprobar que existe
if(!registroId || registroId == null){
		
		return res.status(404).send({
		status: 'error',
		message: 'No existe el articulo!!!'
		});
	}



//buscar el articulo
Registro.findById(registroId, (err, registro) => {

	if(err || !registro){
		return res.status(404).send({
		status: 'error',
		message: 'Error al devolver los datos!!!'
		});
		
}/*

if(!registro){

		//buscar el articulo
		return res.status(404).send({
		status: 'error',
		message: 'no existe el articulo !!!'
 
       });
	}
 */
 //devolver en json
return res.status(200).send({
	status: 'success',
	registro
		
		});	

	});

},

update: (req, res) => {
 //recoger el id del articulo por la url
var registroId = req.params.id;
 

 //recoger los datos que llegan por put
var params = req.body;

 //validar datos
try{
var validate_nombre = !validator.isEmpty(params.nombre);
var validate_contenido = !validator.isEmpty(params.contenido);
var validate_cantidad = validator.isNumeric(params.cantidad);
var validate_descripcion = !validator.isEmpty(params.descripcion);


}catch(err) {
	return res.status(200).send({
   status: 'error',
   message: 'faltan datos por enviar !!!'
	});
}


if(validate_nombre &&  validate_contenido &&  validate_cantidad &&  validate_descripcion){
	 //find and update
	 Registro.findOneAndUpdate({_id: registroId}, params, {new:true}, (err, registroUpdated) => {
if (err) {
		return res.status(500).send({
		status: 'error',
		message: 'error al actualizar!!!'
		});
   
   }

	if(!registroUpdated){
		return res.status(404).send({
			status: 'error',
			message: 'No existe el articulo!!!'
			});
	}

return res.status(200).send({
			status: 'success',
			registro: registroUpdated
			});

	 });
	}else{
		 //devolver respuesta
			return res.status(200).send({
		status: 'error',
		message: 'la validacion no es correcta!!!'
		});
	}

},

delete: (req, res) => {
	//recojer el id de la url

var registroId = req.params.id;

	//find and delete

	Registro.findOneAndDelete({_id: registroId}, (err, registroRemoved) =>{
     
     if(err){
     	return res.status(500).send({
   status: 'error',
   message: 'Error al borrar !!!'
     	});
     }

  	 if(!registroRemoved){
     	return res.status(404).send({
   status: 'error',
   message: 'No se ha borrado el registro, posiblemente no exista !!!'
     	});
     }
   
   return res.status(200).send({
 
   status: 'success',
   registro: registroRemoved

   });  


	});

},

 search: (req, res) => {


 	//sacar el string a buscar
var searchString  = req.params.search;

 	//find or
   Registro.find({ "$or":  [
     { "nombre": { "$regex" : searchString, "$options": "i" }},
     { "contenido": { "$regex" : searchString, "$options": "i" }},

   	]})

   .sort([['date', 'descending']])
   .exec((err, registros) => {

   	if(err){
   		return res.status(500).send({
   status: 'error',
   message: 'error en la peticion !!!'
     	});
   	}

   	if(!registros || registros.length <= 0){
   		return res.status(404).send({
   status: 'error',
   message: 'No hay Registros que coincidan con tu busqueda  !!!'
     	});
   	}


   	return res.status(200).send({
   status: 'success',
   registros
     	});

   });


 	
 }

};  //end controller

module.exports = controller;