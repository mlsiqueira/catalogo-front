import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { Actor, ActorResponse } from '../models/types';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  constructor(private http: HttpClient) { }

  listActors(): Observable<Actor[]> {
    return this.http.get<ActorResponse>(`${environment.API_URL}/actors`)
      .pipe(
        tap(console.log),
        map(e => e.data)
      );
  }

  createActor(body: Actor) {
    return this.http.post(`${environment.API_URL}/actors`, body)
      .pipe(
        tap(console.log)
      );
  }

  deleteActor(id: string) {
    return this.http.delete<ActorResponse>(`${environment.API_URL}/actors/${id}`)
      .pipe(
        tap(console.log),
        catchError(this.handleError),
        map(e => e.data)
      );
  }


  private handleError(fail: HttpErrorResponse) {
    if (fail.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', fail.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${fail.status}, body was: ${fail.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later...');
  }
}
