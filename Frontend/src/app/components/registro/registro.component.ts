import { Component, OnInit  } from '@angular/core';
import { RegistroService } from '../../services/registros.service';
import { Registro } from '../../models/registro';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [RegistroService]
})
export class RegistroComponent implements OnInit{

public registros: Registro[];

  constructor(

    private _registroService: RegistroService

  ) {}


  ngOnInit(): void {
  
  this._registroService.getRegistros().subscribe(
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
