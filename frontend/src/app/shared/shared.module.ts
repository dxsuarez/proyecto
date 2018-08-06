import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BuscadorComponent } from './buscador/buscador.component';
import { HomeComponent } from './home/home.component';
import { ActoresModule } from '../actores/actores.module';
import { UsuariosModule } from '../usuarios/usuarios.module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ActoresModule,
    UsuariosModule
  ],
  declarations: [
    BuscadorComponent,
    HomeComponent
  ],
  exports: []
})
export class SharedModule { }
