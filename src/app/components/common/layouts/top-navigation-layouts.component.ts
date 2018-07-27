import { Component, OnInit } from '@angular/core';
import {detectBody} from "../../../app.helpers";
declare const jQuery: any;
@Component({
  selector: 'app-top-navigation-layouts',
  templateUrl: './top-navigation-layouts.component.html',
  host: {
    '(window:resize)': 'onResize()'
  }
})
export class TopNavigationLayoutsComponent implements OnInit {

  constructor() { }

  public ngOnInit():any {
    detectBody();
  }

  public onResize(){
    detectBody();
  }
}
