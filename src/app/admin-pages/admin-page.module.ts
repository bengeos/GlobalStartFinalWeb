import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AdminPageRoutes} from "./admin-page-routes.module";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ModalModule, BsDropdownModule} from "ngx-bootstrap";
import {NewsComponent} from "./news/news.component";
import {UserComponent} from "./user/user.component";
import {HttpService} from "../services/http.service";
import {UserService} from "./services/user.service";
import {NewsService} from "./services/news.service";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminPageRoutes),
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
  ],
  declarations: [DashboardComponent, NewsComponent, UserComponent],
  providers:[ HttpService, UserService, NewsService]
})
export class AdminPageModule { }
