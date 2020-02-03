import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NgSelectModule } from '@ng-select/ng-select';

import { SharedModule } from 'src/app/shared/shared.module';

import { MoviesComponent } from './movies.component';
import { MovieFormComponent } from './components/movie-form/movie-form.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesComponent
  },
  {
    path: 'new',
    component: MovieFormComponent
  },
  {
    path: ':id/edit',
    component: MovieFormComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  declarations: [
    MoviesComponent,
    MovieFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgSelectModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    RouterModule
  ]
})
export class MoviesModule { }
