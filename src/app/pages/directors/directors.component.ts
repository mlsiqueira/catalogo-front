import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DirectorsService } from 'src/app/services/directors.service';
import { Director } from 'src/app/models/types';

@Component({
  selector: 'app-directors',
  templateUrl: './directors.component.html',
  styleUrls: ['./directors.component.scss']
})
export class DirectorsComponent implements OnInit {

  directors$: Observable<Director[]>;

  constructor(private data: DirectorsService) { }

  ngOnInit() {
    this.directors$ = this.data.listDirectors();
  }

}
