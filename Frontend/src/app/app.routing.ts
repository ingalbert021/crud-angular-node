
//Importar los modulos del router de angular

import { ModuleWithProviders } from '@angular/core';

import { Routes, RouterModule, Router } from '@angular/router';


//importar componentes a los cuales les quiero hacer una pagina 
 
/*Importar componentes a los cuales les quiero hacer una pagina exclusiva*/

import { InicioComponent } from './components/inicio/inicio.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { RegistroComponent } from './components/registro/registro.component';

import { ErrorComponent } from './components/error/error.component';
import { SearchComponent } from './components/search/search.component';
import { RegistroEditComponent } from './components/registro-edit/registro-edit.component';




//Array de rutas

const appRoutes: Routes = [

{ path: '', component: InicioComponent},
{ path: 'buscar/:search', component: SearchComponent},
{ path: 'formulario', component: FormularioComponent},
{ path: 'Registros', component: RegistroComponent},
{ path: 'Registros/editar/:id', component: RegistroEditComponent},
{path: '**', component: ErrorComponent}


];

//Exportar el modulo de rutas 
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);


