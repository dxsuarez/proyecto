import { Component, OnInit } from '@angular/core';
import { BusquedaService } from '../busqueda.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  criterioBusqueda = '';

  constructor(
    private busquedaService: BusquedaService
  ) { }

  ngOnInit() {
  }

  buscar() {
    console.log('buscador.componente', this.criterioBusqueda);
    this.busquedaService.criterioBusqueda = this.criterioBusqueda;
    //this.busquedaService.search(this.criterioBusqueda);
    this.busquedaService.paginaActores = 0;
    this.busquedaService.paginaPeliculas = 0;
    this.busquedaService.cargarActores();
    //this.busquedaService.cargarPeliculas();
  }
}
