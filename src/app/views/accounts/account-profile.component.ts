import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'account-profile',
    template: `
    <p>{{email}}</p>
  `
  })

  export class AccountProfileComponent implements OnInit {
    @Input() email;
    constructor() { }
    ngOnInit(): void {
  
    }
  }