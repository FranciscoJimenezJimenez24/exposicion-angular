import { Injectable } from '@angular/core';
import { Libro } from 'src/interfaces/libro';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {
  public libros: Libro[] = [
    {
      titulo: 'dartakan',
      num_paginas: 156,
      anno_publicacion: 2003
    },
    {
      titulo: 'geronimo stilton',
      num_paginas: 540,
      anno_publicacion: 1990
    },
    {
      titulo: 'diario de grefg',
      num_paginas: 345,
      anno_publicacion: 2012
    },
    {
      titulo: 'Los miserables',
      num_paginas: 1463,
      anno_publicacion: 1862
    },
    {
      titulo: 'Guerra y paz',
      num_paginas: 1225,
      anno_publicacion: 1869
    },
    {
      titulo: 'En busca del tiempo perdido',
      num_paginas: 4215,
      anno_publicacion: 1913
    },
    {
      titulo: 'Ulises',
      num_paginas: 730,
      anno_publicacion: 1922
    },
    {
      titulo: 'El Conde de Montecristo',
      num_paginas: 1243,
      anno_publicacion: 1844
    },
    {
      titulo: 'Crimen y castigo',
      num_paginas: 671,
      anno_publicacion: 1866
    },
    {
      titulo: 'Don Quijote de la Mancha',
      num_paginas: 863,
      anno_publicacion: 1605
    },
    {
      titulo: 'It',
      num_paginas: 1138,
      anno_publicacion: 1986
    },
    {
      titulo: 'El señor de los anillos',
      num_paginas: 1200,
      anno_publicacion: 1954
    },
    {
      titulo: 'Shogun',
      num_paginas: 1152,
      anno_publicacion: 1975
    }
  ];


  constructor() { }
}
