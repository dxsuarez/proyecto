import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  arregloNumeros = [1, 2, 3, 4, 5, 6];

  personas = [
    {
      personaId: 1,
      nombre: 'Gabiela',
      apellido: 'Cuascota',
      direccion: 'Cumbaya',
      telefono: '0995804953',
      email: 'gabriela.cuascota@epn.edu.ec'
    },
    {
      personaId: 2,
      nombre: 'Martín',
      apellido: 'Balarezo',
      direccion: 'Mitad del mundo',
      telefono: '0995804953',
      email: 'ricardo.balarezo@epn.edu.ec'
    },
    {
      personaId: 3,
      nombre: 'Ivan',
      apellido: 'Borja',
      direccion: 'Floresta',
      telefono: '0995804953',
      email: 'ivan.borja@epn.edu.ec'
    },
    {
      personaId: 4,
      nombre: 'Diego',
      apellido: 'Suárez',
      direccion: 'Conocoto',
      telefono: '0995804953',
      email: 'diego.suarez@epn.edu.ec'
    }
  ];

  alertar(indice) {
    var item = this.personas[indice];
    this.personas.splice(indice, 1);
    this.personas.splice(0, 0, item);
  }
}
