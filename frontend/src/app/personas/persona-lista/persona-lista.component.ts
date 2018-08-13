import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Persona } from '../../shared/models/persona.model';
import { BackendService } from '../../shared/backend.service';

@Component({
  selector: 'app-persona-lista',
  templateUrl: './persona-lista.component.html',
  styleUrls: ['./persona-lista.component.css']
})
export class PersonaListaComponent implements OnInit {

  personas: Persona[] = [];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private backendService: BackendService
  ) { }

  getPersonas(): void {
    this.backendService.getPersonas()
      .subscribe(personas => this.personas = personas);
  }

  ngOnInit() {
    this.getPersonas();
  }

}
