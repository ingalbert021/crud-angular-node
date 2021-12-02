import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import Swal from 'sweetalert2';
import { Registro } from '../../models/registro';
import { RegistroService } from '../../services/registros.service';




@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: [RegistroService]
 
})
export class FormularioComponent implements OnInit {
public registro: Registro;
public status: string;
public page_title: string;


  constructor( 
  private _route: ActivatedRoute,
  private _router: Router,
   private _registroService: RegistroService
  
   ) { 
this.registro = new Registro('','','', '', null, null);
this.page_title = 'Creacion del Registro';
  }

  ngOnInit(): void {
  }
  
onSubmit(){
  this._registroService.create(this.registro).subscribe(
  response => {
  console.log(response);
  console.log(this.registro);
  if(response.status == 'success'){
  /*Alerta*/
  Swal.fire(
  'El registro se ha creado!!',
  'El registro se ha creado Correctamente',
  'success'

  );

  this.status = 'success';
  this.registro = response.registro;
  
  //console.log(response);

 

  this._router.navigate(['/Registros']);

  }else{
    Swal.fire(
  'Fallo al crear el registo!!',
  'El registro se no se ha creado Correctamente',
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
 




