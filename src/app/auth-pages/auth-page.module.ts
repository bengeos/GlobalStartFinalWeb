import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegisterComponent} from "./register/register.component";
import {HttpService} from "../services/http.service";
import {AuthService} from "../services/auth.service";
import {RouterModule} from "@angular/router";
import {AuthPageRoutes} from "./auth-page-routes.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
// import {ANIMATION_TYPES, LoadingModule} from 'ngx-loading';
@NgModule({  imports: [
    CommonModule,
  RouterModule.forChild(AuthPageRoutes),
  FormsModule,
  HttpClientModule,
  // LoadingModule.forRoot({
  //   animationType: ANIMATION_TYPES.threeBounce,
  //   backdropBackgroundColour: 'rgba(0,0,0,0.7)',
  //   backdropBorderRadius: '10px',
  //   primaryColour: '#ff9436',
  //   secondaryColour: '#ff761c',
  //   tertiaryColour: '#ff2c10'
  // }),
  ],
  declarations: [LoginPageComponent,RegisterComponent ],
  providers:[ HttpService, AuthService]
})
export class AuthPageModule { }
