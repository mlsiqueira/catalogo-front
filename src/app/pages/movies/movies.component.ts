import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

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
    this.moviesService.deleteMovie(id).subscribe(e => {
      this.movies$ = this.moviesService.listMovies();
      // this.router.navigateByUrl(`${location.href}#${idx + 1}`);
    });
  }

}
