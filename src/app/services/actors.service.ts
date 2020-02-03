import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { Actor, ActorResponse } from '../models/types';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  constructor(private http: HttpClient) { }

  list(): Observable<Actor[]> {
    return this.http.get<ActorResponse>(`${environment.API_URL}/actors`)
      .pipe(
        // tap(console.log),
        map(e => e.data)
      );
  }

  get(id: string): Observable<Actor> {
    return this.http.get<any>(`${environment.API_URL}/actors/${id}`)
      .pipe(
        tap(console.log),
        map(e => e.data)
      );
  }

  create(body: Actor): Observable<Actor> {
    return this.http.post<any>(`${environment.API_URL}/actors`, body)
      .pipe(
        // tap(console.log),
        map(e => e.data)
      );
  }

  update(id: string, body: Actor): Observable<Actor> {
    return this.http.put<any>(`${environment.API_URL}/actors/${id}`, body)
      .pipe(
        // tap(console.log),
        map(e => e.data)
      );
  }

  delete(id: string) {
    return this.http.delete<ActorResponse>(`${environment.API_URL}/actors/${id}`)
      .pipe(
        // tap(console.log),
        map(e => e.data)
      );
  }

}
