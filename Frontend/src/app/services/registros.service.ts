import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registro } from '../models/registro';
import { Global } from './global';

@Injectable()
export class RegistroService {


public url: string;

constructor(
	private _http: HttpClient
){
	this.url = Global.url;

	}

	pruebas(){
	return "soy el servicio de los registros!!";
	}

	getRegistros(last:any = null):Observable<any>{
		
		var registros = 'registros';

	if(last != null){
		 registros = 'registros/true';
	}

	return this._http.get(this.url+registros);
	}

	search(searchString):Observable<any>{

	return this._http.get(this.url+'search/'+searchString)
	}

	create(registro):Observable<any>{
	let params = JSON.stringify(registro);
	let headers = new HttpHeaders().set('Content-Type', 'application/json');

	return this._http.post(this.url+'save', params, {headers: headers});
	}

	/*metodo para sacar un solo registro*/
	getRegistro(registroId):Observable<any>{
	return this._http.get(this.url+'registro/'+registroId);
	}


	update(id, registro):Observable<any>{
	let params = JSON.stringify(registro);
	let headers = new HttpHeaders().set('Content-Type', 'application/json');


	return this._http.put(this.url+'registro/'+id, params, {headers:headers});
	}

	delete(id):Observable<any>{
	let headers = new HttpHeaders().set('Content-Type', 'application/json');
	return this._http.delete(this.url+'registro/'+id, {headers: headers})

	}	



}