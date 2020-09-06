import { Injectable } from '@angular/core';
import { WebRequestService } from '../request/web-request.service';
import { shareReplay, tap, catchError } from 'rxjs/operators';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { ROOT_URL } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private webService: WebRequestService, private router: Router, private http: HttpClient) { }

  login(email: string, password: string) {
    return this.webService.login(email, password).pipe(
      // to avoid running login method multiple times
      shareReplay(),
      tap((res: HttpResponse<any>) => {
        // the auth tokens will be in this header
        this.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));
      }),
      catchError(this.handleError)
    );
  }

  logout() {
    this.removeSession();
    this.router.navigate(['/auth/login']);
  }

  getAccessToken() {
    return localStorage.getItem('x-access-token');
  }

  getRefreshToken() {
    return localStorage.getItem('x-refresh-token');
  }

  getUserId() {
    return localStorage.getItem('user-id');
  }

  setAccessToken(accessToken: string) {
    localStorage.setItem('x-access-token', accessToken)
  }

  // TODO - this needs to be refactored to ngrx store
  private setSession(userId: string, accessToken: string, refreshToken: string) {
    localStorage.setItem('user-id', userId);
    localStorage.setItem('x-access-token', accessToken);
    localStorage.setItem('x-refresh-token', refreshToken);
  }

  private removeSession() {
    localStorage.removeItem('user-id');
    localStorage.removeItem('x-access-token');
    localStorage.removeItem('x-refresh-token');
  }

  // simple error handle
  private handleError(err: any) {
    // in a real world app, we may send the server to some remote logging infrastructure
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    return throwError(errorMessage);
  }

  getNewAccessToken() {
    return this.http.get(`${ROOT_URL}/users/active/access-token`, {
      headers: {
        'x-refresh-token': this.getRefreshToken(),
        '_id': this.getUserId()
      },
      observe: 'response'
    }).pipe(
      tap((res: HttpResponse<any>) => {
        this.setAccessToken(res.headers.get('x-access-token'));
      })
    );
  }
}
