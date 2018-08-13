import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Lugar } from '../../shared/models/lugar.model';
import { Persona } from '../../shared/models/persona.model';
import { BackendService } from '../../shared/backend.service';

@Component({
  selector: 'app-lugar-lista',
  templateUrl: './lugar-lista.component.html',
  styleUrls: ['./lugar-lista.component.css']
})

export class LugarListaComponent implements OnInit {

  personaId = 0;
  persona: Persona;
  lugares: Lugar[] = [];
  observableParametros$ = this.activatedRoute.params;

  constructor(
    private activatedRoute: ActivatedRoute,
    private backendService: BackendService
  ) { }

  getLugares(): void {
    this.backendService.getLugares()
      .subscribe(lugares => this.lugares = lugares);
  }

  getPersona(id: number): void {
    this.backendService.getPersona(id)
      .subscribe(p => this.persona = p);
  }

  ngOnInit() {
    this.observableParametros$
      .subscribe(
        (respuesta) => {
          this.personaId = +respuesta.personaId;
          this.getPersona(this.personaId);
          this.getLugares();
        }
      );
  }
}
