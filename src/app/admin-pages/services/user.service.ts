import {Injectable, EventEmitter} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {AuthService} from '../../services/auth.service';
import {User, PaginatedUsers} from '../user/user.objects';
import {Headers} from '@angular/http';

@Injectable()
export class UserService {
  public PaginatedUsersList = new EventEmitter<PaginatedUsers>();

  constructor(private auth_service: AuthService, private http: HttpService) {}

  public getPaginatedUsersList() {
    const token = this.auth_service.getUserToken();
    return this.http.sendGetRequest('users?token=' + token).subscribe(
      data => {
        this.processGetPaginatedUsersList(data);
      },
      error => {
        console.log(error);
      });
  }

  public processGetPaginatedUsersList(user_data) {
    if (user_data && user_data.users) {
      this.PaginatedUsersList.emit(user_data.users);
    } else {
      console.log('Whoops! Something went wrong!');
    }
  }

  public getPaginatedUser(request_full_url) {
    const token = this.auth_service.getUserToken();
    this.http.sendCustomGetRequest(request_full_url + '&token=' + token).subscribe(
      data => {
        this.processGetPaginatedUsersList(data);
      }
    );
  }

  public getRole() {
    const token = this.auth_service.getUserToken();
    return this.http.sendGetRequest('role?token=' + token);
  }

  public addUser(new_user: User) {
    const token = this.auth_service.getUserToken();
    const header = new Headers();
    return this.http.sendPostRequest('user?token=' + token, new_user, header);
  }

  public registerUser(new_user: User) {
    const token = this.auth_service.getUserToken();
    const header = new Headers();
    return this.http.sendPostRequest('user', new_user, header);
  }
  public updateUser(UpdatedUser: User) {
    const token = this.auth_service.getUserToken();
    const header = new Headers();
    console.log('update_user', UpdatedUser);
    return this.http.sendPutRequest('user?token=' + token, UpdatedUser, header);
  }

  public activateUser(new_user: User) {
    const token = this.auth_service.getUserToken();
    const header = new Headers();
    return this.http.sendPutRequest('status/' + new_user.id + '?token=' + token, new_user, header);
  }

  public deleteUser(userData: User) {
    const token = this.auth_service.getUserToken();
    return this.http.sendDeleteRequest('user/' + userData.id + '?token=' + token);
  }

}
