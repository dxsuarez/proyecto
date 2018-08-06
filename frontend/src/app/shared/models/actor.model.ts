import { Pelicula } from './pelicula.model';

export class Actor {
  id: number;
  nombres: string;
  apellidos: string;
  fechaNacimiento: string;
  numeroPeliculas: number;
  retirado: boolean;
  urlImagen: string;
  peliculas: Pelicula[];
}
