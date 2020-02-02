import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DirectorsComponent } from './directors.component';

const routes: Routes = [
  {
    path: '',
    component: DirectorsComponent
  },
];

@NgModule({
  declarations: [
    DirectorsComponent
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
