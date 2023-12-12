import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateUserComponent } from './pages/users/create-user/create-user.component';
import { LoginComponent } from './pages/users/login/login.component';

import { CrearVuelosComponent } from './pages/vuelos/crear-vuelos/crear-vuelos.component';
import { ListarVuelosComponent } from './pages/vuelos/listar-vuelos/listar-vuelos.component';
import { EditarVuelosComponent } from './pages/vuelos/editar-vuelos/editar-vuelos.component';

import { CrearPilotosComponent } from './pages/piloto/crear-pilotos/crear-pilotos.component';
import { ListarPilotosComponent } from './pages/piloto/listar-pilotos/listar-pilotos.component';
import { EditarPilotosComponent } from './pages/piloto/editar-pilotos/editar-pilotos.component';

import { CrearAvionesComponent } from './pages/aviones/crear-aviones/crear-aviones.component';
import { ListarAvionesComponent } from './pages/aviones/listar-aviones/listar-aviones.component';
import { EditarAvionesComponent } from './pages/aviones/editar-aviones/editar-aviones.component';

import { CrearMiembrosComponent } from './pages/miembros/crear-miembros/crear-miembros.component';
import { ListarMiembrosComponent } from './pages/miembros/listar-miembros/listar-miembros.component';
import { EditarMiembrosComponent } from './pages/miembros/editar-miembros/editar-miembros.component';

const routesInicio: Routes = [
  { path: '', component: LoginComponent },
  { path: 'crear-usuario', component: CreateUserComponent },
  { path: 'crear-vuelos', component: CrearVuelosComponent },
  { path: 'listar-vuelos', component: ListarVuelosComponent },
  { path: 'editar-vuelos/:id', component: EditarVuelosComponent},
  { path: 'crear-pilotos', component: CrearPilotosComponent },
  { path: 'listar-pilotos', component: ListarPilotosComponent },
  { path: 'editar-pilotos/:id', component: EditarPilotosComponent},
  { path: 'crear-aviones', component: CrearAvionesComponent },
  { path: 'listar-aviones', component: ListarAvionesComponent },
  { path: 'editar-aviones/:id', component: EditarAvionesComponent},
  { path: 'crear-miembros', component: CrearMiembrosComponent },
  { path: 'listar-miembros', component: ListarMiembrosComponent },
  { path: 'editar-miembros/:id', component: EditarMiembrosComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];



@NgModule({
  imports: [RouterModule.forRoot(routesInicio)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
