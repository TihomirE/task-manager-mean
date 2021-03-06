import { Injectable } from '@angular/core';
import { ROOT_URL } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// modular service to handle all web requests
export class WebRequestService {

  constructor(private http: HttpClient) { }

  get(uri: string): Observable<any> {
    return this.http.get(`${ROOT_URL}/${uri}`);
  }

  post(uri: string, object: object) {
    return this.http.post(`${ROOT_URL}/${uri}`, object);
  }

  patch(uri: string, object: object) {
    return this.http.patch(`${ROOT_URL}/${uri}`, object);
  }

  delete(uri: string) {
    return this.http.delete(`${ROOT_URL}/${uri}`);
  }

  login(email: string, password: string) {
    return this.http.post(`${ROOT_URL}/users/login`, {
      email, password
    }, { observe: 'response' });
  }

  signup(email: string, password: string) {
    return this.http.post(`${ROOT_URL}/users/signup`, {
      email, password
    }, { observe: 'response' });
  }

}
