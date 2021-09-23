
import { Injectable, Input } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class AccountService {

 userValue = false;

  constructor(private http: HttpClient) {
    this.http = http;
  }

  getUsers(elem): Observable<any> {
    if (elem) {
    //   return this.http.get('https://api.jikan.moe/v3/search/anime?q=' + elem);
    return this.http.get(`api/users`);
    // .map(response => response.json().data);
    }
  }
}