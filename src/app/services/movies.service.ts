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
    return this.http.get<Movie[]>(`${environment.API_URL}/movies`);
  }

  get(id: string): Observable<Movie> {
    return this.http.get<Movie>(`${environment.API_URL}/movies/${id}`);
  }

  create(body: Movie): Observable<Movie> {
    return this.http.post<Movie>(`${environment.API_URL}/movies`, body);
  }

  update(id: string, body: Movie): Observable<Movie> {
    return this.http.put<Movie>(`${environment.API_URL}/movies/${id}`, body);
  }

  delete(id: string) {
    return this.http.delete(`${environment.API_URL}/movies/${id}`);
  }

}
