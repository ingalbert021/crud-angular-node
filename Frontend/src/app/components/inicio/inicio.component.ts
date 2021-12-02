import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../../services/registros.service';
import { Registro } from '../../models/registro';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers: [RegistroService]
})
export class InicioComponent implements OnInit {

	public registros: Registro[];
  

  constructor(

private _registroService: RegistroService

  ) {   }

  ngOnInit(): void {

this._registroService.getRegistros(true).subscribe(
  response => {
  console.log(response);
     if(response.registro){
        this.registros = response.registro;
     }
     else {


     }
},
  error => {
  console.log(error);

    }

  );

   }


}
