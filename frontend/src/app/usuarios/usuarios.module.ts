import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing.module';

import { UsuarioFormularioComponent } from './usuario-formulario/usuario-formulario.component';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import { PeticionAccesoComponent } from './peticion-acceso/peticion-acceso.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    UsuarioFormularioComponent,
    UsuarioListaComponent,
    PeticionAccesoComponent
  ],
  exports: [
    UsuarioListaComponent,
    UsuarioFormularioComponent,
    PeticionAccesoComponent
  ]
})
export class UsuariosModule { }
