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

  list(): Observable<Movie[]> {
    return this.http.get<MovieResponse>(`${environment.API_URL}/movies`)
      .pipe(map(e => e.data));
  }

  get(id: string): Observable<Movie> {
    return this.http.get<any>(`${environment.API_URL}/movies/${id}`)
      .pipe(
        map(e => e.data)
      );
  }

  create(body: Movie): Observable<Movie> {
    return this.http.post<any>(`${environment.API_URL}/movies`, body)
      .pipe(
        // tap(console.log),
        map(e => e.data)
      );
  }

  update(id: string, body: Movie): Observable<Movie> {
    return this.http.put<any>(`${environment.API_URL}/movies/${id}`, body)
      .pipe(
        // tap(console.log),
        map(e => e.data)
      );
  }

  delete(id: string) {
    return this.http.delete(`${environment.API_URL}/movies/${id}`)
      .pipe(
        // tap(console.log)
      );
  }

}
