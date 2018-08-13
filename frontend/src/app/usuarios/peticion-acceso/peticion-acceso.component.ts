import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from '../../shared/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peticion-acceso',
  templateUrl: './peticion-acceso.component.html',
  styleUrls: ['./peticion-acceso.component.css']
})

export class PeticionAccesoComponent implements OnInit {

  codigoConfirmacion: '';
  contrasenia: '';
  usuarioId = 0;
  observableParametros$ = this.activatedRoute.params;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private backendService: BackendService
  ) { }

  ngOnInit() {

  }

  ingresar() {
    this.router.navigate(['/home']);
  }
}
