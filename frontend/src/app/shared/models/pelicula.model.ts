import { Actor } from './actor.model';

export class Pelicula {
  id: number;
  nombre: string;
  anioLanzamiento: number;
  rating: number;
  actoresPrincipales: string;
  sinopsis: string;
  disponible: boolean;
  urlImagen: string;
  actor: Actor;
}
