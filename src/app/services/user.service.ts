import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { User } from '../components/home/home.component';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userURL = 'http://localhost:8080/FYP-TMS-Backend/api/users/';

  constructor(private http: HttpClient) { }

  /*
  GETS USERS
  */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userURL + 'get')
    .pipe(
      tap(users => console.log('received users')),
      catchError(this.handleError('getUsers', []))
    );
  }

  //////// Save methods //////////
  /** POST: add a new hero to the server */
  addUser (user: User): Observable<User> {
    return this.http.post<User>(this.userURL + 'add', user, httpOptions).pipe(
      tap((userx: User) => console.log(`added user w/ id=${userx.email}`)),
      catchError(this.handleError<User>('addUser'))
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
      console.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
