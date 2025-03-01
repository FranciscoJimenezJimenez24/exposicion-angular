import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BibliotecaRoutingModule } from './biblioteca-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { CardLibroComponent } from './card-libro/card-libro.component';
import { PuntitosPipe } from 'src/pipe/puntitos.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    CardLibroComponent,
    PuntitosPipe
  ],
  imports: [
    CommonModule,
    BibliotecaRoutingModule,
    FormsModule
  ]
})
export class BibliotecaModule { }
