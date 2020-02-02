import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from 'src/app/services/data.service';
import { Movie } from 'src/app/models/types';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies$: Observable<Movie[]>;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.movies$ = this.data.listMovies();
  }

}
