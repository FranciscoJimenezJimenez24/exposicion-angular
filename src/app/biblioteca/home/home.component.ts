import { Component } from '@angular/core';
import { Libro } from 'src/interfaces/libro';
import { BibliotecaService } from 'src/services/biblioteca.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  titulo = '';
  public libroSeleccionado!: Libro;
  public libros: Libro[] = [];
  showForm = true;

  public nuevoLibro: Libro = {
    titulo: '',
    num_paginas: 0,
    anno_publicacion: 0
  };

  constructor(private bibliotecaService: BibliotecaService) { }

  ngOnInit() {    
    this.libros = this.bibliotecaService.libros;
    this.libroSeleccionado = this.libros[Math.floor(Math.random() * this.libros.length)];
  }

  public mostrarLibro() {    
    this.libroSeleccionado = this.libros[Math.floor(Math.random() * this.libros.length)];
  }

  recibirTitulo(evento: string) {
    this.titulo = evento;
  }

  agregarLibro() {
    if (this.nuevoLibro.titulo.trim() && this.nuevoLibro.num_paginas > 0 && this.nuevoLibro.anno_publicacion > 0) {
      console.log(this.libros);
      this.libros.push({ ...this.nuevoLibro });
      console.log(this.libros);
      this.nuevoLibro = { titulo: '', num_paginas: 0, anno_publicacion: 0 };       
    }
    
  }
}
