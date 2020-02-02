import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DirectorsComponent } from './directors.component';
import { DirectorFormComponent } from './components/director-form/director-form.component';
import { DirectorComponent } from './components/director/director.component';

const routes: Routes = [
  {
    path: '',
    component: DirectorsComponent
  },
  {
    path: 'new',
    component: DirectorFormComponent,
    data: { pageTitle: 'New'}
  },
  {
    path: ':id',
    children: [
      {
        path: '',
        component: DirectorsComponent,
        data: { pageTitle: 'New'},
      },
      {
        path: 'edit',
        component: DirectorFormComponent,
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
    DirectorsComponent,
    DirectorFormComponent,
    DirectorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DirectorsModule { }
