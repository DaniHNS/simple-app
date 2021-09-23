import { Component, OnInit } from '@angular/core';
import { User } from './../../_interfaces/user';
import { AccountService } from '../../_services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  user: User;

  constructor(private accountService: AccountService) {
     // this.user.loggedIn = this.accountService.userValue;
  }

}

