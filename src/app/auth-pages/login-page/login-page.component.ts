import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {LoginUser} from './login-page.objects';
declare const swal: any;
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent implements OnInit {
  public new_login_user = new LoginUser();
  public loading = false;

  constructor(private authService: AuthService, private routeManager: Router) {
  }
  ngOnInit() {
    this.authService.AuthenticatedUserEmitter.subscribe(
      data => {
        if (data) {
          this.routeManager.navigate(['/admin/news']);
        }
        this.loading = false;
      }
    );
    this.authService.AuthErrorEmitter.subscribe(
      data => {this.loading = false; this.showSwalMessage('Authentication Failed', data.error); }
    );
  }
  public loginUser() {
    this.loading = true;
    this.authService.authenticate(this.new_login_user);
    console.log(this.new_login_user);
  }
  public showSwalMessage(title: String, message: String) {
    swal({
      title: title,
      text: message,
      buttonsStyling: true,
      confirmButtonClass: 'btn btn-primary'
    });
  }
}
