import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'account-user',
  template: `
    <h1>User</h1>
    <p>{{userName}}</p>
  `
})
export class AccountUserComponent implements OnInit {
  @Input() userName;
  constructor() { }
  ngOnInit(): void {

  }

}