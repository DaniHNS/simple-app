import { Component, OnInit } from '@angular/core';
import { User } from './../../_interfaces/user';
import { AccountService } from '../../_services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  user: any;

  constructor(private accountService: AccountService) {
      this.user = this.accountService.userValue;
      console.log('logged in :', this.user)
  }
  

  logedToggle() {
    this.accountService.userValue = !this.accountService.userValue;
    this.user = this.accountService.userValue;
  }
}

