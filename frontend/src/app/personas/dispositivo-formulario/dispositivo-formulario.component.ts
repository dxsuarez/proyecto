import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BackendService } from '../../shared/backend.service';
import { DispositivoAcceso } from '../../shared/models/dispositivoAcceso.model';

@Component({
  selector: 'app-dispositivo-formulario',
  templateUrl: './dispositivo-formulario.component.html',
  styleUrls: ['./dispositivo-formulario.component.css']
})

export class DispositivoFormularioComponent implements OnInit {

  dispositivoAcceso: DispositivoAcceso;
  observableParametros$ = this.activatedRoute.params;

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private backendService: BackendService
  ) { }

  getDispositivoAcceso(id: number): void {
    this.backendService.getDispositivoAcceso(id)
      .subscribe(p => this.dispositivoAcceso = p);
  }

  addDispositivoAcceso(dispositivoAcceso: DispositivoAcceso): void {
    this.backendService.addDispositivoAcceso(dispositivoAcceso)
      .subscribe(p => this.dispositivoAcceso = p);
  }

  updateDispositivoAcceso(dispositivoAcceso: DispositivoAcceso): void {
    this.backendService.updateDispositivoAcceso(dispositivoAcceso)
      .subscribe(p => this.dispositivoAcceso = p);
  }

  ngOnInit() {
    this.dispositivoAcceso = new DispositivoAcceso();
    this.observableParametros$
      .subscribe(
        (respuesta) => {
          const lugarId = +respuesta.ludarId;
          const id = +respuesta.id;
          if (id !== 0) {
            this.getDispositivoAcceso(respuesta.id);
          }
          console.log(lugarId, id);
        }
      );
  }

  guardar() {
    console.log('guardar', this.dispositivoAcceso);
    if (this.dispositivoAcceso.id === 0 || this.dispositivoAcceso.id  == null) {
      this.addDispositivoAcceso(this.dispositivoAcceso);
    } else {
      this.updateDispositivoAcceso(this.dispositivoAcceso);
    }
    this.location.back();
  }
}
