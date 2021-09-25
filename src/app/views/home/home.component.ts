import { Component, OnInit } from '@angular/core';
import { UserData } from '../../interfaces/UserData';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name: string;
  success: boolean;
  constructor() {
  }
  ngOnInit(): void {
    this.name = sessionStorage.getItem('name');
    this.success = Boolean(sessionStorage.getItem('success'));
  }
}

