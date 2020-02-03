import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { Director, DirectorResponse } from '../models/types';

@Injectable({
  providedIn: 'root'
})
export class DirectorsService {

  constructor(private http: HttpClient) { }

  listDirectors(): Observable<Director[]> {
    return this.http.get<DirectorResponse>(`${environment.API_URL}'/directors`)
      .pipe(map(e => e.data));
  }

  createActor(body: Director) {
    return this.http.post(`${environment.API_URL}/actors`, body)
      .pipe(
        tap(console.log)
      );
  }

  deleteActor(id: string) {
    return this.http.delete<DirectorResponse>(`${environment.API_URL}/actors/${id}`)
      .pipe(
        tap(console.log),
        map(e => e.data)
      );
  }
}
