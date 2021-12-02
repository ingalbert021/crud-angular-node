
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'angular2-moment';



import { AppComponent } from './app.component';
import { MiComponenteComponent } from './components/mi-componente/mi-componente.component';
import { HeaderComponent } from './components/header/header.component';
import { PieComponent } from './components/pie/pie.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistroComponent } from './components/registro/registro.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ErrorComponent } from './components/error/error.component';
import { SearchComponent } from './components/search/search.component';
import { RegistrosComponent } from './components/registros/registros.component';
import { RegistroEditComponent } from './components/registro-edit/registro-edit.component';

@NgModule({
  declarations: [
      AppComponent,
    MiComponenteComponent,
    HeaderComponent,
    PieComponent,
    InicioComponent,
    RegistroComponent,
    FormularioComponent,
    ErrorComponent,
    SearchComponent,
    RegistrosComponent,
    RegistroEditComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    MomentModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
