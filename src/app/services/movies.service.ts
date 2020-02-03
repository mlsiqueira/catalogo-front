import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { Movie, MovieResponse } from '../models/types';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  listMovies(): Observable<Movie[]> {
    return this.http.get<MovieResponse>(`${environment.API_URL}/movies`)
      .pipe(map(e => e.data));
  }

  get(id): Observable<Movie> {
    return this.http.get<any>(`${environment.API_URL}/movies/${id}`)
      .pipe(map(e => e.data));
  }

  createMovie(body: Movie) {
    return this.http.post(`${environment.API_URL}/movies`, body)
      .pipe(
        tap(console.log)
      );
  }

  deleteMovie(id: string) {
    return this.http.delete(`${environment.API_URL}/movies/${id}`)
      .pipe(
        tap(console.log),
        map(e => e.data)
      );
  }

}
