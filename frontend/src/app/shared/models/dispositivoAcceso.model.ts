import {TipoEspacio} from './tipoEspacio.model';
import {Lugar} from './lugar.model';

export class DispositivoAcceso {
  id: number;
  numeroSerie: string;
  direccionMAC: string;
  nombre: string;
  tipoEspacio: TipoEspacio;
  lugar: Lugar;
}
