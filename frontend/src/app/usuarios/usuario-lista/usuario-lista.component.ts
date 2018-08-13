import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Usuario } from '../../shared/models/usuario.model';
import { BackendService } from '../../shared/backend.service';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.css']
})
export class UsuarioListaComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private backendService: BackendService
  ) { }

  getUsuarios(): void {
    this.backendService.getUsuarios()
      .subscribe(usuarios => this.usuarios = usuarios);
  }

  ngOnInit() {
    this.getUsuarios();
  }

}
