import { Component, OnInit } from '@angular/core';
import { TipoRelacionPersona } from '../../shared/models/tipoRelacionPersona.model';
import {BackendService} from '../../shared/backend.service';

@Component({
  selector: 'app-usuario-formulario',
  templateUrl: './usuario-formulario.component.html',
  styleUrls: ['./usuario-formulario.component.css']
})
export class UsuarioFormularioComponent implements OnInit {

  public tipoRelacionPersona: TipoRelacionPersona;
  tiposRelacionPersona: TipoRelacionPersona[] = [];

  constructor(private backendService: BackendService) { }

  getTiposRelacionPersona(): void {
    this.backendService.getTiposRelacionPersona()
      .subscribe(tiposRelacionPersona => this.tiposRelacionPersona = tiposRelacionPersona);
  }

  ngOnInit() {
    this.getTiposRelacionPersona();
    this.tipoRelacionPersona = this.tiposRelacionPersona[0];
  }

  employeeSelected(event) {
    console.log('selected employee: ' + event);
  }
}
