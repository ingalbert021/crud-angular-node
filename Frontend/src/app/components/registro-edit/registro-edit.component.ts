import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import Swal from 'sweetalert2'
import { Registro } from '../../models/registro';
import { RegistroService } from '../../services/registros.service';



@Component({
  selector: 'app-registro-edit',
  templateUrl: '../formulario/formulario.component.html',
  styleUrls: ['./registro-edit.component.css'],
  providers: [RegistroService]
 
})
export class RegistroEditComponent implements OnInit {
public registro: Registro;
public status: string;
public is_edit: boolean;
public page_title: string;


  constructor( 
	private _route: ActivatedRoute,
	private _router: Router,
  	private _registroService: RegistroService
  	

   ) { 
this.registro = new Registro('','','', '', null, null);
this.is_edit = true;
this.page_title = 'Edicion del Registro';


  }

  ngOnInit(): void {
	/*sacar un solo registro*/
	this._route.params.subscribe(params => {
	  let id = params['id'];

	  this._registroService.getRegistro(id).subscribe(
	response => {
	console.log(response);

	if(response.registro){
	this.registro = response.registro;

	}else{
	this._router.navigate(['/registros']);

	}
		
	},

	  error => {
	  console.log(error);
	this._router.navigate(['/registros']);
	  }

	    );
	  });

}
  onSubmit(){
  this._registroService.update(this.registro._id, this.registro).subscribe(
  response => {
  console.log(response);
  console.log(this.registro);
  if(response.status == 'success'){
   /*Alerta*/
 

  Swal.fire(
  'El registro  Editado!!',
  'El registro se ha editado Correctamente',
  'success'

  );

  this.status = 'success';
  this.registro = response.registro;
  
  //console.log(response);
 

  this._router.navigate(['/Registros']);

  }else{
      // Alerta
 Swal.fire(
  'Fallo al editar el registo!!',
  'El registro se no se ha editado Correctamente',
  'error'

  );
  
  this.status = 'error';
    }
  },
  error => {
   

  console.log(error);
  this.status = 'error';
 
  }

  );


}
}

 