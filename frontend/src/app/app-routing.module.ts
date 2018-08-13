import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from './shared/login/login.component';
import { UsuarioListaComponent } from './usuarios/usuario-lista/usuario-lista.component';
import { UsuarioFormularioComponent } from './usuarios/usuario-formulario/usuario-formulario.component';
import { PeticionAccesoComponent } from './usuarios/peticion-acceso/peticion-acceso.component';
import { PersonaListaComponent } from './personas/persona-lista/persona-lista.component';
import { PersonaFormularioComponent } from './personas/persona-formulario/persona-formulario.component';
import { LugarListaComponent } from './personas/lugar-lista/lugar-lista.component';
import { LugarFormularioComponent } from './personas/lugar-formulario/lugar-formulario.component';
import { DispositivoListaComponent } from './personas/dispositivo-lista/dispositivo-lista.component';
import { DispositivoFormularioComponent } from './personas/dispositivo-formulario/dispositivo-formulario.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'usuarios', component: UsuarioListaComponent },
  { path: 'peticion', component: PeticionAccesoComponent },
  { path: 'usuario/:id', component: UsuarioFormularioComponent },
  { path: 'personas', component: PersonaListaComponent },
  { path: 'persona/:id', component: PersonaFormularioComponent },
  { path: 'lugares/:personaId', component: LugarListaComponent },
  { path: 'lugar/:personaId/:id', component: LugarFormularioComponent },
  { path: 'dispositivos/:lugarId', component: DispositivoListaComponent },
  { path: 'dispositivo/:lugarId/:id', component: DispositivoFormularioComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
