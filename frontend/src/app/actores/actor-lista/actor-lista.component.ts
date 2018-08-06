import { Component, OnInit } from '@angular/core';
import {BackendService} from '../../shared/backend.service';
import {BusquedaService} from '../../shared/busqueda.service';
import {Actor} from '../../shared/models/actor.model';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actor-lista',
  templateUrl: './actor-lista.component.html',
  styleUrls: ['./actor-lista.component.css']
})
export class ActorListaComponent implements OnInit {

  actores: Actor[];

  constructor(
    private _activatedRoute: ActivatedRoute,
    public busquedaService: BusquedaService,
  private backendService: BackendService) { }

  ngOnInit() {
    //this.getActores();
    //this.busquedaService.cargarActores2();

    const observableParametros$ = this
      ._activatedRoute
      .params;

    observableParametros$
      .subscribe(
        (respuestaOk) => {
          console.log('Ok', respuestaOk);
        },
        (respuestaError) => {
          console.log('Error', respuestaError);
        },
        () => { // respuestaCompletado
          console.log('Completado');
        }
      );
    console.log('fin');
  }

  cargarMas() {
    this.busquedaService.paginaActores++;
    this.busquedaService.cargarActores();
  }
}
