import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrowserModule }  from '@angular/platform-browser';
import { Router } from '@angular/router';

import { BackendService } from '../../shared/backend.service';
import {Usuario} from '../../shared/models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  nombre: '';
  contrasenia: '';
  usuarioId = 0;
  usuario: Usuario;
  usuarios: Usuario[];
  observableParametros$ = this.activatedRoute.params;

  constructor(
    private router: Router,
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

  ingresar() {
    this.router.navigate(['/home']);
  }
}
