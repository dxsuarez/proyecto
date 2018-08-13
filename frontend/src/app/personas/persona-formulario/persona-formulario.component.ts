import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BackendService } from '../../shared/backend.service';
import { Persona } from '../../shared/models/persona.model';

@Component({
  selector: 'app-persona-formulario',
  templateUrl: './persona-formulario.component.html',
  styleUrls: ['./persona-formulario.component.css']
})
export class PersonaFormularioComponent implements OnInit {

  persona: Persona;
  observableParametros$ = this.activatedRoute.params;

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private backendService: BackendService
  ) { }

  getPersona(id: number): void {
    this.backendService.getPersona(id)
      .subscribe(p => this.persona = p);
  }

  addPersona(persona: Persona): void {
    this.backendService.addPersona(persona)
      .subscribe(p => this.persona = p);
  }

  updatePersona(persona: Persona): void {
    this.backendService.updatePersona(persona)
      .subscribe(p => this.persona = p);
  }

  ngOnInit() {
    this.persona = new Persona();
    this.observableParametros$
      .subscribe(
        (respuesta) => {
          const id = +respuesta.id;
          if (id !== 0) {
            this.getPersona(respuesta.id);
          }
          console.log(this.persona);
        }
      );
  }

  guardar() {
    if (this.persona.id === 0 || this.persona.id  == null) {
      this.addPersona(this.persona);
    } else {
      this.updatePersona(this.persona);
    }
    this.location.back();
  }
}
