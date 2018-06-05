import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-favorito-item',
  templateUrl: './favorito-item.component.html',
  styleUrls: ['./favorito-item.component.css']
})
export class FavoritoItemComponent implements OnInit {


  @Input() indice: number;
  @Input() textoIcono: string;
  @Input() titulo: string;
  @Input() subtitulo: string;
  @Input() contenido: string;

  @Output() dioClickEnEstado: EventEmitter<number> = new EventEmitter();

  claseTextoIcono = 'favorito-item-texto-icono mat-card-avatar';

  constructor() { }

  ngOnInit() {
    this.claseTextoIcono = 'favorito-item-texto-icono texto-icono-color-' + this.indice + ' mat-card-avatar';
  }

  hizoClickEnEstado(indice) {
    this.dioClickEnEstado.emit(indice);
  }

}
