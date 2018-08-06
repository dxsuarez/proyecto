import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioFormularioComponent } from './usuario-formulario/usuario-formulario.component';
import {ActorListaComponent} from '../actores/actor-lista/actor-lista.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UsuarioFormularioComponent
  ],
  exports: [
    UsuarioFormularioComponent
  ]
})
export class UsuariosModule { }
