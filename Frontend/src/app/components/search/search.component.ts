import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RegistroService } from '../../services/registros.service';
import { Registro } from '../../models/registro';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [RegistroService]
})
export class SearchComponent implements OnInit {

	public registros: Registro[]; 

  constructor(

  private _route: ActivatedRoute,
  private _router: Router,
  private _RegistroService: RegistroService


  ) { }

  ngOnInit(): void {

  this._route.params.subscribe(params => {
  var search = params['search'];


	this._RegistroService.search(search).subscribe(
	response => {
	console.log(response);
	if(response.registros){
	this.registros = response.registros;
	}
	
	},
	error => {
	console.log(error);
this.registros = [];
		}
	);

  	});
  }

}
