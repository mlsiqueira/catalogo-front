import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'movies',
    loadChildren: () => import('./pages/movies/movies.module').then(mod => mod.MoviesModule)
  },
  {
    path: 'directors',
    loadChildren: () => import('./pages/directors/directors.module').then(mod => mod.DirectorsModule)
  },
  {
    path: 'actors',
    loadChildren: () => import('./pages/actors/actors.module').then(mod => mod.ActorsModule)
  },
  {
    path: '',
    redirectTo: '/movies',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/movies'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
