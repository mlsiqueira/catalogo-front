import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/models/types';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies$: Observable<Movie[]>;

  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.movies$ = this.movieService.listMovies();
  }

}
