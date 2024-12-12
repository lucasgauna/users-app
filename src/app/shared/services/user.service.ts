import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { User } from './users.interface';
import { API_URLS } from 'src/app/constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(API_URLS.USERS).pipe(
      catchError((error) => {
        console.error('Error while retrieving users:', error);
        return of([]);
      })
    );
  }
}
