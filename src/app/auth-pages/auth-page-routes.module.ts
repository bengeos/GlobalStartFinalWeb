import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginPageComponent} from "./login-page/login-page.component";
import {Routes} from "@angular/router";
import {RegisterComponent} from "./register/register.component";
export const AuthPageRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'login',
      component: LoginPageComponent,
    }]
  },
  {
    path: '',
    children: [{
      path: 'register',
      component: RegisterComponent,
    }]
  },

];@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AuthPageRoutesModule { }
