import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { Movie, MovieResponse } from '../models/types';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  listMovies(): Observable<Movie[]> {
    return this.http.get<MovieResponse>(`${environment.API_URL}'/movies`)
      .pipe(map(e => e.data));
  }

  createMovie(body: Movie): Observable<Movie[]> {
    return this.http.post<MovieResponse>(`${environment.API_URL}'/movies`, body)
      .pipe(map(e => e.data));
  }
}
