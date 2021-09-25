import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { AccountsComponent } from './views/accounts/accounts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'login', component: LoginComponent },
{ path: 'accounts', component: AccountsComponent },
{ path: '', component: HomeComponent },
{ path: '**', redirectTo: 'home' }
];

@NgModule({
  declarations: [ 
    HomeComponent, LoginComponent, AccountsComponent
  ],
  imports: [CommonModule,
    BrowserModule, RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
