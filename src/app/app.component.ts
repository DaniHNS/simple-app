import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserData } from './interfaces/userData';
import { AccountService } from './services/account.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'simple-app';

  success: boolean;

  constructor() { }
  ngOnInit(): void {

    this.success = Boolean(sessionStorage.getItem('success'));
  }
}