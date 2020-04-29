import { Injectable } from '@angular/core';
import { ROOT_URL } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

// modular service to handle all web requests
export class WebRequestService {

  constructor(private http: HttpClient) { }

  get(uri: string) {
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

}
