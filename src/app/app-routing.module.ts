import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BibliotecaModule } from './biblioteca/biblioteca.module';

const routes: Routes = [
  {
    path: 'biblioteca',
    loadChildren: () => import('./biblioteca/biblioteca.module').then(m => m.BibliotecaModule)
  },
  {
    path: '',
    redirectTo: 'biblioteca',
    pathMatch: 'full'
  },
  {path: '**', redirectTo: 'biblioteca'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
