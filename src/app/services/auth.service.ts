import {Injectable, EventEmitter, Output} from '@angular/core';
import {HttpService} from "./http.service";
import {HttpHeaders} from "@angular/common/http";
import {LoginUser} from "../auth-pages/login-page/login-page.objects";
import {Headers} from "@angular/http";
import {AuthMessage, ErrorMessage} from "../app.objects";

@Injectable()
export class AuthService {
  @Output() autheticate_emiter = new EventEmitter<boolean>();
  public is_authenticated: boolean;
  public AuthenticatedUserEmitter = new EventEmitter<boolean>();
  public AuthErrorEmitter = new EventEmitter<AuthMessage>();

  constructor(private httpRequest: HttpService) {
  }
  // Authenticate user
  public authenticate(loginUser: LoginUser) {
    console.log('Authenticating User', loginUser);
    this.httpRequest.sendPostRequest('authenticate', loginUser, new Headers()).subscribe(
      data => {
        this.authenticate_user(data, true);
      },
      err => {
        this.AuthErrorEmitter.emit(new AuthMessage(0, 'Authentication Has Failed'));
      }
    );
  }


  public login(login_data) {
    if (login_data) {
      this.autheticate_emiter.emit(true);
      this.is_authenticated = true;
      console.log(login_data);
    } else {
      this.autheticate_emiter.emit(false);
      this.is_authenticated = false;
    }
  }

  private authenticate_user(response: any, status) {
    if (status) {
      if (response && response.token && response.user) {
        this.storeUserToken(response.token);
        this.storeUserInfo(response.user);
        this.login(response);
        this.AuthenticatedUserEmitter.emit(response.user);
      } else {
        this.AuthErrorEmitter.emit(new AuthMessage(0, 'Whoops! Your Account is Inactive'));

      }
    }else {
      this.AuthErrorEmitter.emit(new AuthMessage(0, 'Whoops! Failed to Login. Try Again'));
    }

  }

  public getUserLogedIn() {
    return this.is_authenticated;
  }

  public storeUserToken(user_token: string) {
    localStorage.setItem('token_auth_key', user_token);
  }

  public storeUserInfo(user_data: string) {
    localStorage.setItem('user', JSON.stringify(user_data));
  }

  public getUserToken() {
    return localStorage.getItem('token_auth_key');
    // console.log(localStorage.getItem('token_auth_key'))

  }


}
