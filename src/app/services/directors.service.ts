import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { Director, DirectorResponse } from '../models/types';

@Injectable({
  providedIn: 'root'
})
export class DirectorsService {

  constructor(private http: HttpClient) { }

  listDirectors(): Observable<Director[]> {
    return this.http.get<DirectorResponse>(`${environment.API_URL}/directors`)
      .pipe(map(e => e.data));
  }

  createDirector(body: Director) {
    return this.http.post(`${environment.API_URL}/directors`, body)
      .pipe(
        tap(console.log)
      );
  }

  deleteDirector(id: string) {
    return this.http.delete<DirectorResponse>(`${environment.API_URL}/directors/${id}`)
      .pipe(
        tap(console.log),
        map(e => e.data)
      );
  }
}
