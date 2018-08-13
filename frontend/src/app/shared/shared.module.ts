import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BuscadorComponent } from './buscador/buscador.component';
import { HomeComponent } from './home/home.component';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { PersonasModule } from '../personas/personas.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    UsuariosModule,
    PersonasModule,
    AppRoutingModule
  ],
  declarations: [
    BuscadorComponent,
    HomeComponent,
    LoginComponent
  ],
  exports: [
    LoginComponent
  ]
})
export class SharedModule { }
