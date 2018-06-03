import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-opcion',
  styleUrls: ['./menu-opcion.component.css'],
  template: `
    <div class="card sa-menu1" style="width: 18rem;">
      <img class="card-img-top" src="{{linkImagen1}}">
      <div class="card-body">
        <h5 class="card-title">{{titulo1}}</h5>
        <p class="card-text">{{contenido1}}</p>
        <a href="#" class="btn btn-primary">{{boton1}}</a>
      </div>
    </div>
    <div class="card sa-menu2" style="width: 18rem;">
      <img class="card-img-top" src="{{linkImagen2}}">
      <div class="card-body">
        <h5 class="card-title">{{titulo2}}</h5>
        <p class="card-text">{{contenido2}}</p>
        <a href="#" class="btn btn-primary">{{boton2}}</a>
      </div>
    </div>
    `
})
export class MenuOpcionComponent implements OnInit {
  tarjetaTitulo = ['Usuarios', 'Peticiones'];
  tarjetaContenido = ['Lista con las personas capaces de abrir puertas', 'Peticiones realizadas por todos los usuarios'];
  tarjetaBoton = ['Mostrar Usuarios', 'Mostrar Peticiones'];
  tarjetaImagen = ['http://emser.es/wp-content/uploads/2016/08/usuario-sin-foto.png', 'http://es.weequizz.com/imgquizz/icon/x74pr.png'];
  linkImagen1 = this.tarjetaImagen[0];
  titulo1 = this.tarjetaTitulo[0];
  contenido1 = this.tarjetaContenido[0];
  boton1 = this.tarjetaBoton[0];
  linkImagen2 = this.tarjetaImagen[1];
  titulo2 = this.tarjetaTitulo[1];
  contenido2 = this.tarjetaContenido[1];
  boton2 = this.tarjetaBoton[1];
  constructor() {
  }

  ngOnInit() {
  }

}



