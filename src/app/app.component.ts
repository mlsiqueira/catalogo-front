import { Component } from '@angular/core';

import * as toastr from 'toastr';
toastr.options.closeButton = true;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { }
