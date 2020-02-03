import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PencilButtonComponent } from './pencil-button/pencil-button.component';
import { TrashButtonComponent } from './trash-button/trash-button.component';
import { AddButtonComponent } from './add-button/add-button.component';

@NgModule({
  declarations: [
    NavbarComponent,
    PageHeaderComponent,
    PencilButtonComponent,
    TrashButtonComponent,
    AddButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    NavbarComponent,
    PageHeaderComponent,
    PencilButtonComponent,
    TrashButtonComponent,
    AddButtonComponent
  ]
})
export class SharedModule { }
