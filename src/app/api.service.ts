import {catchError, retry} from 'rxjs/internal/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Transportadora } from './transportadora';
import { Observable, of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const localUrl = 'http://localhost:8080/transportadorasapi/api/transportadora';
const apiUrl = 'http://localhost:8080/transportadorasapi/api/transportadora';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'jwt-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getTransportadoras(): Observable<HttpResponse<Transportadora[]>> {
    return this.http.get<Transportadora[]>(
      localUrl, { observe: 'response' });
  }


  getTransportadoraById(idTransportadora: any): Observable<any> {
    return this.http.get<Transportadora>(localUrl + idTransportadora).pipe(
      retry(3), catchError(this.handleError<Transportadora>('getTransportadora')));
  }

  saveTransportadora(transportadora: Transportadora): Observable<Transportadora> {
    return this.http.post<Transportadora>(localUrl, transportadora, httpOptions)
      .pipe(
        catchError(this.handleError('addTransportadora', transportadora))
      );
  }

  updateTransportadora(idTransportadora: any, transportadora: Transportadora): Observable<Transportadora> {
    return this.http.put<Transportadora>(localUrl + idTransportadora, Transportadora, httpOptions)
      .pipe(
        catchError(this.handleError('updateTransportadora', transportadora))
      );
  }

  deleteTransportadora(idTransportadora: any): Observable<Transportadora> {
    return this.http.delete<Transportadora>(localUrl + idTransportadora, httpOptions);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}
