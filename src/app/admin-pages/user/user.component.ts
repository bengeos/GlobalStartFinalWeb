import {Component, OnInit, TemplateRef} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {NgForm} from '@angular/forms';
import {BsModalService, BsModalRef} from 'ngx-bootstrap';
import {UserService} from '../services/user.service';
import {PaginatedUsers, Role, User} from './user.objects';
import {News} from "../news/news.objects";

@Component({
  selector: 'app-users',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  public users: User[];
  public role: any;
  public paginated_users_list = new PaginatedUsers();
  public new_user = new User();
  public users_list = new User();
  public selected_user = new User();
  public modalRef: BsModalRef;
  public user_roles_list: Role[];
  constructor(private authservice: AuthService, private  user_service: UserService, private modalService: BsModalService) { }

  ngOnInit() {
    this.updateUserComponent();
    this.user_service.PaginatedUsersList.subscribe(
      data => { this.paginated_users_list = data; } );
    this.user_service.getRole().subscribe(
      roles => {this.user_roles_list = roles['roles']; });
    this.user_service.getRole().subscribe(
      roles => {this.role = roles['roles'];} );
  }
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  public updateUserComponent() {
    this.user_service.getPaginatedUsersList();
  }
  public updateUserStatus() {
    this.user_service.activateUser(this.selected_user).subscribe(
      () => {this.updateUserComponent(); }
    );
  }
  public registerUser() {
    this.user_service.addUser(this.new_user).subscribe(
      data => {this.updateUserComponent(); }
    );
  }
  public onEditUser(user) {
    this.selected_user = user;
  }
  public getPaginatedUser(request_full_url) {
    this.user_service.getPaginatedUser(request_full_url);
  }

  public deleteUser () {
    this.user_service.deleteUser(this.selected_user).subscribe(
      data => { this.updateUserComponent(); console.log(data); },
      error => {console.log(error); }
    );
  }
  public updateUser() {
    this.user_service.updateUser(this.selected_user).subscribe(
      data => {this.updateUserComponent(); console.log(data); },
      error => {console.log(error); }
    );
  }
  public getPaginatedSearch() {
    console.log('searching user');
  }


}
