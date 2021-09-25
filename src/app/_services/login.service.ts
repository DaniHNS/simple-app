import { Injectable, Input } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../_interfaces/user';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {
    this.http = http;
  }

  getUsers(): Observable<any> {
    if (true) {
    //   return this.http.get('https://api.jikan.moe/v3/search/anime?q=' + elem);
    return this.http.get<any>('api/users.json');
    //.map(response => response.json().data);
    }
  }
}