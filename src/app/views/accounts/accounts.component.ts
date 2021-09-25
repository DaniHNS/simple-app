import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  name: string;
  userName: string;
  constructor() { }

  ngOnInit(): void {
    this.name = sessionStorage.getItem('name');
    this.userName = sessionStorage.getItem('userName');
  }

}
