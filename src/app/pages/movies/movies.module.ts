import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MoviesComponent } from './movies.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieFormComponent } from './components/movie-form/movie-form.component';

const routes: Routes = [
  {
    // www.url.com/movies
    path: '',
    component: MoviesComponent
  },
  {
    // www.url.com/movies/new
    path: 'new',
    component: MovieFormComponent,
    data: { pageTitle: 'New'}
  },
  {
    path: ':id',
    children: [
      {
        // www.url.com/movies/15
        path: '',
        component: MovieComponent,
        data: { pageTitle: 'New'},
      },
      {
        // www.url.com/movies/15/edit
        path: 'edit',
        component: MovieFormComponent,
        data: { pageTitle: 'Edit'}
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  declarations: [
    MoviesComponent,
    MovieComponent,
    MovieFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MoviesModule { }
