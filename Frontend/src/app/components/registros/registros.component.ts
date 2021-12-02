import { Component, OnInit, Input } from '@angular/core';
import { Registro } from '../../models/registro';
import { Global } from '../../services/global';
import Swal from 'sweetalert2'
import { RegistroService } from '../../services/registros.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css'],
    providers: [RegistroService]
})
export class RegistrosComponent implements OnInit {

public url: string;

@Input() registros: Registro[];
@Input() inicio: string;


 
  constructor(
    private _route: ActivatedRoute,
  private _router: Router,
  	private _registroService: RegistroService
  	) { 

   this.url = Global.url;

  }

  ngOnInit(): void {
  }


  delete(id){

  Swal.fire({
  title: 'estas seguro de Borrar este registro?',
  text: "si borras este registro no podras recuperarlo!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'si!'
}).then((result) => {
  if (result.isConfirmed) {

  this._registroService.delete(id).subscribe(
  response => {
  this._router.navigate(['/']);
  },

  error => {
  console.log(error);
  this._router.navigate(['/Registros']);
  }
  );

    Swal.fire(
      'Eliminacion con exito!',
      'EL registro se ha borrado.',
      'success'
    )
  }
  else {
  Swal.fire(
    'Trankilo el registro no se ha borrado',
    'success'

    )
  }
})

  }

}
