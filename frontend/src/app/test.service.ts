import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Test } from './test';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private backendUrl = 'http://localhost:1337/Test';

  constructor(private http: HttpClient) { }

  getTests (): Observable<Test[]> {
    return this.http.get<Test[]>(this.backendUrl);
  }
}
