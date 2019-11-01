import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestApiService {

  public urlBase = 'https://swapi.co/api';

  constructor(public http: HttpClient) { }

  getRequest(endpoint) {
    return this.http.get(`${this.urlBase}/${endpoint}`);
  }
}
