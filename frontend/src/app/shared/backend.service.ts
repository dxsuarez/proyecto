import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, mergeMap, take, filter } from 'rxjs/operators';

import { Actor } from './models/actor.model';
import { Test } from './models/test.model';

import { TipoRelacionPersona } from './models/tipoRelacionPersona.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  //private backendUrl = 'http://localhost:1337/';
  private actoresUrl = 'http://localhost:1337/actor';
  private peliculaaUrl = 'http://localhost:1337/pelicula';
  private tipoRelacionPersonaUrl = 'http://localhost:1337/tipoRelacionPersona';

  constructor(private http: HttpClient) { }

  /*

  getActores(): Observable<Actor[]> {
    const url = this.backendUrl + 'actor';
    return this.http.get<Actor[]>(url);
  }

  getTests(): Observable<Test[]> {
    return this.http.get<Test[]>(this.backendUrl);
  }

  buscarActores(criterioBusqueda: string): Observable<Actor[]> {
    const actores: Observable<Actor[]> = this.getActores();
    return actores;
  }

  */

  getTiposRelacionPersona (): Observable<TipoRelacionPersona[]> {
    return this.http.get<TipoRelacionPersona[]>(this.tipoRelacionPersonaUrl)
      .pipe(
        tap(tiposRelacionPersona => this.log('fetched tiposRelacionPersona')),
        catchError(this.handleError('getTiposRelacionPersona', []))
      );
  }

  /** GET heroes from the server */
  getActores (): Observable<Actor[]> {
    return this.http.get<Actor[]>(this.actoresUrl)
      .pipe(
        tap(actores => this.log('fetched actores')),
        catchError(this.handleError('getActores', []))
      );
  }

  getActoresTodos (): Observable<Actor[]> {
    return this.http.get<Actor[]>(this.actoresUrl)
      .pipe(
        tap(actores => this.log('fetched actores')),
        catchError(this.handleError('getActoresTodos', []))
      );
  }

  /** GET hero by id. Return `undefined` when id not found */
  getActorNo404<Data>(id: number): Observable<Actor> {
    const url = `${this.actoresUrl}/?id=${id}`;
    return this.http.get<Actor[]>(url)
      .pipe(
        map(actores => actores[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} actor id=${id}`);
        }),
        catchError(this.handleError<Actor>(`getActor id=${id}`))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getActor(id: number): Observable<Actor> {
    const url = `${this.actoresUrl}/${id}`;
    return this.http.get<Actor>(url).pipe(
      tap(_ => this.log(`fetched actor id=${id}`)),
      catchError(this.handleError<Actor>(`getActor id=${id}`))
    );
  }

  /* GET heroes whose name contains search term */
  searchActores(term: string): Observable<Actor[]> {

    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    console.log('backend.service', 'searchActores', term);

    return this.http.get<Actor[]>(`${this.actoresUrl}/?nombres=${term}`).pipe(
      tap(_ => this.log(`found actores matching "${term}"`)),
      catchError(this.handleError<Actor[]>('searchActores', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    //this.messageService.add(`HeroService: ${message}`);
    //console.error(message);
    console.log(message);
  }
}
