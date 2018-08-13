import { Component, OnInit } from '@angular/core';
import { BusquedaService } from '../busqueda.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private busquedaService: BusquedaService
  ) { }

  ngOnInit() {
    this.busquedaService.cargarActores();
  }

}
