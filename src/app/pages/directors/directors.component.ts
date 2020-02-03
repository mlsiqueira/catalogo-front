import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

import { DirectorsService } from 'src/app/services/directors.service';
import { Director } from 'src/app/models/types';

@Component({
  selector: 'app-directors',
  templateUrl: './directors.component.html',
  styleUrls: ['./directors.component.scss']
})
export class DirectorsComponent implements OnInit {

  directors$: Observable<Director[]>;

  constructor(private directorsService: DirectorsService) { }

  ngOnInit() {
    this.directors$ = this.directorsService.listDirectors();
  }

  deleteMovie(id: string, idx: number) {
    const observer = {
      next: () => {
        this.directors$ = this.directorsService.listDirectors();
      },
      error: error => {
        console.error(error);
      }
    };

    this.directorsService.deleteDirector(id).subscribe(observer);
  }

}
