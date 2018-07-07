import {Routes} from "@angular/router";

import {Dashboard1Component} from "./views/dashboards/dashboard1.component";
import {Dashboard2Component} from "./views/dashboards/dashboard2.component";
import {Dashboard3Component} from "./views/dashboards/dashboard3.component";
import {Dashboard4Component} from "./views/dashboards/dashboard4.component";
import {Dashboard41Component} from "./views/dashboards/dashboard41.component";
import {Dashboard5Component} from "./views/dashboards/dashboard5.component";

import {StarterViewComponent} from "./views/appviews/starterview.component";
import {LoginComponent} from "./views/appviews/login.component";

import {BlankLayoutComponent} from "./components/common/layouts/blankLayout.component";
import {BasicLayoutComponent} from "./components/common/layouts/basicLayout.component";
import {TopNavigationLayoutComponent} from "./components/common/layouts/topNavigationlayout.component";

export const ROUTES:Routes = [
  // Main redirect
  {path: '', redirectTo: 'auth/login', pathMatch: 'full'},


  // App views
  // {
  //   path: '',
  //   component: BasicLayoutComponent,
  //   children: [{
  //     path: 'admin',
  //     loadChildren: './admin-pages/admin-page.module#AdminPageModule'
  //   }]
  // },
  {
    path: '',
    component: BlankLayoutComponent,
    children: [{
      path: 'auth',
      loadChildren: './auth-pages/auth-page.module#AuthPageModule'
    }]
  },
  {path: '**', redirectTo: '/auth/login'},
];
