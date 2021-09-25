
import { Injectable, Input } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class AccountService {

  public userValue = false;

  constructor(private http: HttpClient) {
    this.http = http;
  }


  
}