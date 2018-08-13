import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DispositivoAcceso } from '../../shared/models/dispositivoAcceso.model';
import { Lugar } from '../../shared/models/lugar.model';
import { Persona } from '../../shared/models/persona.model';
import { BackendService } from '../../shared/backend.service';

@Component({
  selector: 'app-dispositivo-lista',
  templateUrl: './dispositivo-lista.component.html',
  styleUrls: ['./dispositivo-lista.component.css']
})

export class DispositivoListaComponent implements OnInit {

  lugarId = 0;
  lugar: Lugar;
  dispositivosAcceso: DispositivoAcceso[] = [];
  observableParametros$ = this.activatedRoute.params;

  constructor(
    private activatedRoute: ActivatedRoute,
    private backendService: BackendService
  ) { }

  getDispositivosAcceso(): void {
    this.backendService.getDispositivosAcceso()
      .subscribe(dispositivosAcceso => this.dispositivosAcceso = dispositivosAcceso);
  }

  getLugar(id: number): void {
    this.backendService.getLugar(id)
      .subscribe(p => this.lugar = p);
  }

  ngOnInit() {
    this.observableParametros$
      .subscribe(
        (respuesta) => {
          this.lugarId = +respuesta.lugarId;
          this.getLugar(this.lugarId);
          this.getDispositivosAcceso();
        }
      );
  }
}
