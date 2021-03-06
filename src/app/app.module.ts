import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from "@angular/router";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {ROUTES} from "./app.routes";
import { AppComponent } from './app.component';

// App views
import {DashboardsModule} from "./views/dashboards/dashboards.module";

// App modules/components
import {LayoutsModule} from "./components/common/layouts/layouts.module";
import {HttpService} from "./services/http.service";
import {AuthService} from "./services/auth.service";
import {HttpClientModule} from "@angular/common/http";
import {ModalModule} from "ngx-bootstrap";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModalModule.forRoot(),
    HttpModule,
    HttpClientModule,
    DashboardsModule,
    LayoutsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, HttpService, AuthService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
