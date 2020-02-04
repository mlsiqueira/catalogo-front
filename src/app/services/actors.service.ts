import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { Actor } from '../models/types';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  constructor(private http: HttpClient) { }

  list(): Observable<Actor[]> {
    return this.http.get<Actor[]>(`${environment.API_URL}/actors`);
  }

  get(id: string): Observable<Actor> {
    return this.http.get<Actor>(`${environment.API_URL}/actors/${id}`);
  }

  create(body: Actor): Observable<Actor> {
    return this.http.post<Actor>(`${environment.API_URL}/actors`, body);
  }

  update(id: string, body: Actor): Observable<Actor> {
    return this.http.put<Actor>(`${environment.API_URL}/actors/${id}`, body);
  }

  delete(id: string) {
    return this.http.delete(`${environment.API_URL}/actors/${id}`);
  }

}
