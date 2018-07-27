import {Routes} from "@angular/router";
import {BlankLayoutComponent} from "./components/common/layouts/blankLayout.component";
import {BasicLayoutComponent} from "./components/common/layouts/basicLayout.component";

export const ROUTES:Routes = [
  // Main redirect
  {path: '', redirectTo: 'auth/login', pathMatch: 'full'},


  // App views
  {
    path: '',
    component: BasicLayoutComponent,
    children: [{
      path: 'admin',
      loadChildren: './admin-pages/admin-page.module#AdminPageModule'
    }]
  },
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
