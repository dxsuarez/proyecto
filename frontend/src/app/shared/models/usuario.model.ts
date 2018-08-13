import {Persona} from './persona.model';
import {Perfil} from './perfil.model';

export class Usuario {
  id: number;
  nombre: string;
  contrasenia: string;
  persona: Persona;
  perfilId: number;
}
