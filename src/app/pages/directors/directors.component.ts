import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from 'src/app/services/data.service';
import { Director } from 'src/app/models/types';

@Component({
  selector: 'app-directors',
  templateUrl: './directors.component.html',
  styleUrls: ['./directors.component.scss']
})
export class DirectorsComponent implements OnInit {

  directors$: Observable<Director[]>;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.directors$ = this.data.listDirectors();
  }

}
