import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroeCard.component.html',
})
export class HeroeCardComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: number;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor() {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }


  verHeroe() {
    this.heroeSeleccionado.emit(this.heroe.id);
  }
}
