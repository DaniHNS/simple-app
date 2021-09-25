import { Component } from '@angular/core';
import { LoginService } from './_services/login.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private _jsonURL = 'api/users.json';

  title = 'simple-app';
  
  usersData;

  constructor (private users: LoginService, private http: HttpClient) {
      this.http.get<any>("api/users.json").subscribe((data)=> {
        this.usersData = data;
        console.log('Dani', this.usersData);
      }
   ) 
}

public getJSON(): Observable<any> {
  return this.http.get<any>(this._jsonURL);
}

}