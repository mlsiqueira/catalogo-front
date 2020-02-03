import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';

import { ActorsComponent } from './actors.component';
import { ActorFormComponent } from './components/actor-form/actor-form.component';

const routes: Routes = [
  {
    path: '',
    component: ActorsComponent
  },
  {
    path: 'new',
    component: ActorFormComponent
  },
  {
    path: ':id/edit',
    component: ActorFormComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  declarations: [
    ActorsComponent,
    ActorFormComponent
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
export class ActorsModule { }
