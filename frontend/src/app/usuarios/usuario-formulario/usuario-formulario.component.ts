import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Perfil } from '../../shared/models/perfil.model';
import { Usuario } from '../../shared/models/usuario.model';
import { BackendService } from '../../shared/backend.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-usuario-formulario',
  templateUrl: './usuario-formulario.component.html',
  styleUrls: ['./usuario-formulario.component.css']
})
export class UsuarioFormularioComponent implements OnInit {

  usuario: Usuario;
  perfil: Perfil;
  perfiles: Perfil[] = [];
  perfilId = 1;

  observableParametros$ = this.activatedRoute.params;

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private backendService: BackendService
  ) { }

  getPerfiles(): void {
    this.backendService.getPerfiles()
      .subscribe(p => this.perfiles = p);
  }

  getPerfilPredeterminado(): void {
    this.backendService.getPerfiles()
      .subscribe(p => this.perfil = p[0]);
  }

  getPerfil(id: number): void {
    this.backendService.getPerfil(id)
      .subscribe(p => this.perfil = p);
  }

  getUsuario(id: number): void {
    this.backendService.getUsuario(id)
      .subscribe(p => this.usuario = p,
        () => console.log('Error'),
        () => this.setPerfil());
  }

  // addUsuario(usuario: Usuario): void {
  //   this.backendService.addUsuario(usuario)
  //     .subscribe(p => this.usuario = p,
  //       () => console.log('Error'),
  //       () => this.actualizar());
  // }

  addUsuario(usuario: Usuario): void {
    this.backendService.addUsuario(usuario)
      .subscribe(p => this.usuario = p);
  }

  updateUsuario(usuario: Usuario): void {
    this.backendService.updateUsuario(usuario)
      .subscribe(p => this.usuario = p);
  }

  ngOnInit() {
    this.getPerfiles();
    this.getPerfilPredeterminado();
    console.log(this.perfiles);
    this.usuario = new Usuario();
    this.observableParametros$
      .subscribe(
        (respuesta) => {
          const id = +respuesta.id;
          if (id !== 0) {
            this.getUsuario(respuesta.id);
          }
          console.log(id);
        }
      );
  }

  guardar() {
    //if(this.usuario.perfiles == null) {
    //  this.usuario.perfiles = [];
    //}
    //this.perfil.usuarios = null;
    //this.usuario.perfiles.push(this.perfil);
    console.log('guardar', this.usuario);
    this.usuario.perfilId = this.perfilId;
    if (this.usuario.id === 0 || this.usuario.id  == null) {
      this.addUsuario(this.usuario);
    } else {
      this.updateUsuario(this.usuario);
    }
    this.location.back();
  }

/*  actualizar() {
    if (this.usuario.perfiles == null) {
      this.usuario.perfiles = [];
    }
    console.log('actualizar', this.perfil);

    this.usuario.perfiles.push(this.perfil);
    this.updateUsuario(this.usuario);
    //this.location.back();
  }*/

setPerfil() {
  this.perfilId = this.usuario.perfilId;
}

  seleccionarPerfil(id: number) {
    this.perfilId = id;
    this.getPerfil(this.perfilId);
  }
}
