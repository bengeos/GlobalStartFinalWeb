import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {Routes} from "@angular/router";
import {NewsComponent} from "./news/news.component";
import {UserComponent} from "./user/user.component";
export const AdminPageRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'dashboard',
      component: DashboardComponent,
    }]
  },
  {
    path: '',
    children: [{
      path: 'user',
      component: UserComponent,
    }]
  },


  {
    path: '',
    children: [{
      path: 'setting',
      // component: SettingComponent,
    }]
  },

  {
    path: '',
    children: [{
      path: 'news',
      component: NewsComponent,
    }]
  },

];
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DashboardComponent]
})
export class AdminPageRoutesModule { }
