import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';

import { DirectorsComponent } from './directors.component';
import { DirectorFormComponent } from './components/director-form/director-form.component';

const routes: Routes = [
  {
    path: '',
    component: DirectorsComponent
  },
  {
    path: 'new',
    component: DirectorFormComponent
  },
  {
    path: ':id/edit',
    component: DirectorFormComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  declarations: [
    DirectorsComponent,
    DirectorFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    RouterModule
  ]
})
export class DirectorsModule { }
