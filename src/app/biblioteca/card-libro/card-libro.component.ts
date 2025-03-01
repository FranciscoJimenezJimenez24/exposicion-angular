import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Libro } from 'src/interfaces/libro';

@Component({
  selector: 'app-card-libro',
  templateUrl: './card-libro.component.html',
  styleUrls: ['./card-libro.component.css']
})
export class CardLibroComponent {
  @Input() libro!:Libro;
  @Output() tituloLibro = new EventEmitter<string>();

  enviarTituloLibro() {
    this.tituloLibro.emit('Título del libro: ' + this.libro.titulo);
  }
}
