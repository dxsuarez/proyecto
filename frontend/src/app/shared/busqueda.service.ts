import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Actor } from './models/actor.model';
import { Pelicula } from './models/pelicula.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BusquedaService {

  criterioBusqueda = '';
  //criterioBusqueda = new Subject<string>();
  actores: Actor[] = [];
  actoresTodos: Actor[] = [];
  //actores$: Observable<Actor[]>;
  peliculas: Pelicula[] = [];
  paginaActores = 0;
  paginaPeliculas = 0;
  longitudPaginaActores = 6;
  longitudPaginaPeliculas = 8;
  existeSiguientePaginaActores = true;
  existeSiguientePaginaPeliculas = true;
  indiceInicialActores = 0;
  indiceFinalActores = 0;

  constructor(
    private backendService: BackendService
  ) { }

  getActores(): void {
    this.backendService.getActores()
      .subscribe(actores => this.actores = actores
        .filter(actor => actor.nombres.indexOf(this.criterioBusqueda) >= 0)
        .slice(this.indiceInicialActores, this.indiceFinalActores)
      );
  }


  getActoresTodos(): void {
    this.backendService.getActoresTodos()
      .subscribe(actores => this.actoresTodos = actores
        .filter(actor => actor.nombres.indexOf(this.criterioBusqueda) >= 0)
      );
  }

  cargarActores2() {
    this.getActores();
    console.log('zzzzzzzzzzz');
    const indiceInicial = this.paginaActores * this.longitudPaginaActores;
    let cantidadItems = this.longitudPaginaActores;
    if (this.actores.length < this.longitudPaginaActores) {
      cantidadItems = this.actores.length;
    }
    const indiceFinal = indiceInicial + cantidadItems;
    this.actores = this.actores.slice(indiceInicial, indiceFinal);
    const siguientePagina = this.paginaActores + 1;
    const indiceSiguientePagina = siguientePagina * this.longitudPaginaActores;
    this.existeSiguientePaginaActores = (indiceSiguientePagina < this.actores.length);
  }

  cargarActores() {
    this.getActoresTodos();
    const actores: Actor[] = this.actoresTodos;
    const indiceInicial = this.paginaActores * this.longitudPaginaActores;
    let cantidadItems = this.longitudPaginaActores;
    if (actores.length < this.longitudPaginaActores) {
      cantidadItems = actores.length;
    }
    const indiceFinal = indiceInicial + cantidadItems;
    const siguientePagina = this.paginaActores + 1;
    const indiceSiguientePagina = siguientePagina * this.longitudPaginaActores;
    this.existeSiguientePaginaActores = (indiceSiguientePagina < actores.length);
    this.indiceInicialActores = indiceInicial;
    this.indiceFinalActores = indiceFinal;
    this.getActores();
  }
}
