import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorComponent } from './actor/actor.component';
import { ActorItemComponent } from './actor-item/actor-item.component';
import { ActorListaComponent } from './actor-lista/actor-lista.component';

import { SharedModule } from '../shared/shared.module';

import { BackendService } from '../shared/backend.service';
import { ActorDetalleComponent } from './actor-detalle/actor-detalle.component';

import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    ActorComponent,
    ActorItemComponent,
    ActorListaComponent,
    ActorDetalleComponent,
  ],
  providers: [
    BackendService
  ],
  exports: [
    ActorListaComponent
  ]
})
export class ActoresModule { }
