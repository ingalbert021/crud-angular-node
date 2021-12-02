import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MiComponenteComponent } from './components/mi-componente/mi-componente.component';
import { HeaderComponent } from './components/header/header.component';
import { PieComponent } from './components/pie/pie.component';
import { SliderComponent } from './components/slider/slider.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistroComponent } from './components/registro/registro.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ErrorComponent } from './components/error/error.component';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    MiComponenteComponent,
    HeaderComponent,
    PieComponent,
    SliderComponent,
    InicioComponent,
    RegistroComponent,
    FormularioComponent,
    ErrorComponent,
    SearchComponent,
 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
