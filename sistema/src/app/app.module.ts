import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/users/login/login.component';
import { CreateUserComponent } from './pages/users/create-user/create-user.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { CrearVuelosComponent } from './pages/vuelos/crear-vuelos/crear-vuelos.component';
import { ListarVuelosComponent } from './pages/vuelos/listar-vuelos/listar-vuelos.component';
import { EditarVuelosComponent } from './pages/vuelos/editar-vuelos/editar-vuelos.component';
import { CrearPilotosComponent } from './pages/piloto/crear-pilotos/crear-pilotos.component';
import { EditarPilotosComponent } from './pages/piloto/editar-pilotos/editar-pilotos.component';
import { ListarPilotosComponent } from './pages/piloto/listar-pilotos/listar-pilotos.component';
import { CrearAvionesComponent } from './pages/aviones/crear-aviones/crear-aviones.component';
import { EditarAvionesComponent } from './pages/aviones/editar-aviones/editar-aviones.component';
import { ListarAvionesComponent } from './pages/aviones/listar-aviones/listar-aviones.component';
import { CrearMiembrosComponent } from './pages/miembros/crear-miembros/crear-miembros.component';
import { EditarMiembrosComponent } from './pages/miembros/editar-miembros/editar-miembros.component';
import { ListarMiembrosComponent } from './pages/miembros/listar-miembros/listar-miembros.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateUserComponent,
    NavbarComponent,
    CrearVuelosComponent,
    ListarVuelosComponent,
    EditarVuelosComponent,
    CrearPilotosComponent,
    EditarPilotosComponent,
    ListarPilotosComponent,
    CrearAvionesComponent,
    EditarAvionesComponent,
    ListarAvionesComponent,
    CrearMiembrosComponent,
    EditarMiembrosComponent,
    ListarMiembrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
