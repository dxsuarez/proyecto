import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, mergeMap, take, filter } from 'rxjs/operators';

import { Test } from './models/test.model';
import { Perfil } from './models/perfil.model';
import { Usuario } from './models/usuario.model';
import { TipoRelacionPersona } from './models/tipoRelacionPersona.model';
import { Persona } from './models/persona.model';
import { Lugar } from './models/lugar.model';
import { DispositivoAcceso } from './models/dispositivoAcceso.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private tipoRelacionPersonaUrl = 'http://localhost:1337/tipoRelacionPersona';
  private perfilesUrl = 'http://localhost:1337/perfil';
  private usuariosUrl = 'http://localhost:1337/usuario';
  private personasUrl = 'http://localhost:1337/persona';
  private lugaresUrl = 'http://localhost:1337/lugar';
  private dispositivosAccesoUrl = 'http://localhost:1337/dispositivoAcceso';

  constructor(private http: HttpClient) { }

  /** Perfiles */

  getPerfil(id: number): Observable<Perfil> {
    const url = `${this.perfilesUrl}/${id}`;
    return this.http.get<Perfil>(url)
      .pipe(
        catchError(this.handleError<Perfil>(`getPerfil id=${id}`))
      );
  }

  getPerfiles (): Observable<Perfil[]> {
    return this.http.get<Perfil[]>(this.perfilesUrl)
      .pipe(
        catchError(this.handleError('getPerfiles', []))
      );
  }

  /** Usuarios */

  getUsuario(id: number): Observable<Usuario> {
    const url = `${this.usuariosUrl}/${id}`;
    return this.http.get<Usuario>(url)
      .pipe(
        catchError(this.handleError<Usuario>(`getUsuario id=${id}`))
      );
  }

  getUsuarios (): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.usuariosUrl)
      .pipe(
        catchError(this.handleError('getUsuarios', []))
      );
  }

  addUsuario (usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.usuariosUrl, usuario, httpOptions)
      .pipe(
        catchError(this.handleError('addUsuario', usuario))
      );
  }

  deleteUsuario (id: number): Observable<{}> {
    const url = `${this.usuariosUrl}/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError('deleteUsuario'))
      );
  }

  updateUsuario (usuario: Usuario): Observable<Usuario> {
    const url = `${this.usuariosUrl}/${usuario.id}`;
    return this.http.patch<Usuario>(url, usuario, httpOptions)
      .pipe(
        catchError(this.handleError('updateUauario', usuario))
      );
  }

  /** Personas */

  getPersona(id: number): Observable<Persona> {
    const url = `${this.personasUrl}/${id}`;
    return this.http.get<Persona>(url)
      .pipe(
        catchError(this.handleError<Persona>(`getPersona id=${id}`))
      );
  }

  getPersonas (): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.personasUrl)
      .pipe(
        catchError(this.handleError('getPersonas', []))
      );
  }

  addPersona (persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.personasUrl, persona, httpOptions)
      .pipe(
        catchError(this.handleError('addPersona', persona))
      );
  }

  deletePersona (id: number): Observable<{}> {
    const url = `${this.personasUrl}/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError('deletePersona'))
      );
  }

  updatePersona (persona: Persona): Observable<Persona> {
    const url = `${this.personasUrl}/${persona.id}`;
    return this.http.patch<Persona>(url, persona, httpOptions)
      .pipe(
        catchError(this.handleError('updatePersona', persona))
      );
  }

  /** Lugares */

  getLugar(id: number): Observable<Lugar> {
    const url = `${this.lugaresUrl}/${id}`;
    return this.http.get<Lugar>(url)
      .pipe(
        catchError(this.handleError<Lugar>(`getLugar id=${id}`))
      );
  }

  getLugares (): Observable<Lugar[]> {
    return this.http.get<Lugar[]>(this.lugaresUrl)
      .pipe(
        catchError(this.handleError('getLugares', []))
      );
  }

  addLugar (lugar: Lugar): Observable<Lugar> {
    return this.http.post<Lugar>(this.lugaresUrl, lugar, httpOptions)
      .pipe(
        catchError(this.handleError('addLugar', lugar))
      );
  }

  deleteLugar (id: number): Observable<{}> {
    const url = `${this.lugaresUrl}/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError('deleteLugar'))
      );
  }

  updateLugar (lugar: Lugar): Observable<Lugar> {
    const url = `${this.lugaresUrl}/${lugar.id}`;
    return this.http.patch<Lugar>(url, lugar, httpOptions)
      .pipe(
        catchError(this.handleError('updateLugar', lugar))
      );
  }

  /** Dispositivos Acceso */

  getDispositivoAcceso(id: number): Observable<DispositivoAcceso> {
    const url = `${this.dispositivosAccesoUrl}/${id}`;
    return this.http.get<DispositivoAcceso>(url)
      .pipe(
        catchError(this.handleError<DispositivoAcceso>(`getDispositivoAcceso id=${id}`))
      );
  }

  getDispositivosAcceso(): Observable<DispositivoAcceso[]> {
    return this.http.get<DispositivoAcceso[]>(this.dispositivosAccesoUrl)
      .pipe(
        catchError(this.handleError('getDispositivoAcceso', []))
      );
  }

  addDispositivoAcceso (dispositivoAcceso: DispositivoAcceso): Observable<DispositivoAcceso> {
    return this.http.post<DispositivoAcceso>(this.dispositivosAccesoUrl, dispositivoAcceso, httpOptions)
      .pipe(
        catchError(this.handleError('addDispositivoAcceso', dispositivoAcceso))
      );
  }

  deleteDispositivoAcceso (id: number): Observable<{}> {
    const url = `${this.dispositivosAccesoUrl}/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError('deleteDispositivoAcceso'))
      );
  }

  updateDispositivoAcceso (dispositivoAcceso: DispositivoAcceso): Observable<DispositivoAcceso> {
    const url = `${this.dispositivosAccesoUrl}/${dispositivoAcceso.id}`;
    return this.http.patch<DispositivoAcceso>(url, dispositivoAcceso, httpOptions)
      .pipe(
        catchError(this.handleError('updateDispositivoAcceso', dispositivoAcceso))
      );
  }


  addTipoRelacionPersona (tipoRelacionPersona: Object): Observable<Object> {
    console.log('addTipoRelacionPersona');
    return this.http.post<Object>(this.tipoRelacionPersonaUrl, tipoRelacionPersona, httpOptions)
      .pipe(
        catchError(this.handleError('addTipoRelacionPersona', tipoRelacionPersona))
      );
  }

  getTiposRelacionPersona (): Observable<TipoRelacionPersona[]> {
    return this.http.get<TipoRelacionPersona[]>(this.tipoRelacionPersonaUrl)
      .pipe(
        tap(tiposRelacionPersona => this.log('fetched tiposRelacionPersona')),
        catchError(this.handleError('getTiposRelacionPersona', []))
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
