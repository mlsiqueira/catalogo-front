import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Movie, MovieResponse } from '../models/types';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  listMovies(): Observable<Movie[]> {
    return this.http.get<MovieResponse>('http://localhost:3000/movies')
      .pipe(map(e => e.data));
  }

}
