import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import * as toastr from 'toastr';

import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/models/types';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  preserveWhitespaces: true
})
export class MoviesComponent implements OnInit {

  movies$: Observable<Movie[]>;

  constructor(
    private moviesService: MoviesService,
    private router: Router) { }

  ngOnInit() {
    this.movies$ = this.moviesService.listMovies();
  }

  deleteMovie(id: string, idx: number) {
    const observer = {
      next: () => {
        this.movies$ = this.moviesService.listMovies();
        toastr.success('Filme excluído com sucesso.');
      },
      error: error => {
        toastr.error(error);
      }
    };

    this.moviesService.deleteMovie(id).subscribe(observer);
  }

}
