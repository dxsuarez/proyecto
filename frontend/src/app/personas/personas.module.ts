import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing.module';

import { PersonaFormularioComponent } from './persona-formulario/persona-formulario.component';
import { PersonaListaComponent } from './persona-lista/persona-lista.component';
import { LugarFormularioComponent } from './lugar-formulario/lugar-formulario.component';
import { LugarListaComponent } from './lugar-lista/lugar-lista.component';
import { DispositivoListaComponent } from './dispositivo-lista/dispositivo-lista.component';
import { DispositivoFormularioComponent } from './dispositivo-formulario/dispositivo-formulario.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    PersonaFormularioComponent,
    PersonaListaComponent,
    LugarFormularioComponent,
    LugarListaComponent,
    DispositivoListaComponent,
    DispositivoFormularioComponent
  ],
  exports: [
    PersonaFormularioComponent,
    PersonaListaComponent,
    LugarFormularioComponent,
    LugarListaComponent,
    DispositivoListaComponent,
    DispositivoFormularioComponent
  ]
})
export class PersonasModule { }
