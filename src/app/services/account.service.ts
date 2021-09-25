
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AccountService {

  constructor(private http: HttpClient) {
  }

  getUser(email: string, password: string): Observable<any> {
    return this.http.get('./api/users.json');
    // return this.http.post('./api/users.json', [email, password]);
  }

}