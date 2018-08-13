import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BackendService } from '../../shared/backend.service';
import { Lugar } from '../../shared/models/lugar.model';

@Component({
  selector: 'app-lugar-formulario',
  templateUrl: './lugar-formulario.component.html',
  styleUrls: ['./lugar-formulario.component.css']
})

export class LugarFormularioComponent implements OnInit {

  lugar: Lugar;
  observableParametros$ = this.activatedRoute.params;

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private backendService: BackendService
  ) { }

  getLugar(id: number): void {
    this.backendService.getLugar(id)
      .subscribe(p => this.lugar = p);
  }

  addLugar(lugar: Lugar): void {
    this.backendService.addLugar(lugar)
      .subscribe(p => this.lugar = p);
  }

  updateLugar(lugar: Lugar): void {
    this.backendService.updateLugar(lugar)
      .subscribe(p => this.lugar = p);
  }

  ngOnInit() {
    this.lugar = new Lugar();
    this.observableParametros$
      .subscribe(
        (respuesta) => {
          const personaId = +respuesta.personaId;
          const id = +respuesta.id;
          if (id !== 0) {
            this.getLugar(respuesta.id);
          }
          console.log(personaId, id);
        }
      );
  }

  guardar() {
    console.log('guardar', this.lugar);
    if (this.lugar.id === 0 || this.lugar.id  == null) {
      this.addLugar(this.lugar);
    } else {
      this.updateLugar(this.lugar);
    }
    this.location.back();
  }
}
