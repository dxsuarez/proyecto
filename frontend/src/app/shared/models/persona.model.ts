import {Lugar} from './lugar.model';
import {Usuario} from './usuario.model';

export class Persona {
  id: number;
  nombre: string;
  apellido: string;
  direccion: string;
  telefono: string;
  email: string;
  usuario: Usuario;
  lugares: Lugar[];
}
