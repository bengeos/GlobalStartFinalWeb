import {Injectable, EventEmitter} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {HttpService} from "../../services/http.service";
import {PaginatedTestimonies, Testimony} from "../Testimonies/testimony.objects";
import {Headers} from "@angular/http";

@Injectable()
export class TestimoniesService {
  public paginatedTestimony = new EventEmitter<PaginatedTestimonies>();
  constructor(private authService:AuthService, private http: HttpService) { }

  public getPaginatedTestimonies() {
    const token = this.authService.getUserToken();
    return this.http.sendGetRequest('Testimonies?token=' + token).subscribe(
      data => {this.processGetPaginatedTestimony(data); },
      error => {console.log(error); });
  }
  public processGetPaginatedTestimony(testimony_data) {
    if (testimony_data && testimony_data.status && testimony_data.Testimonies) {
      this.paginatedTestimony.emit(testimony_data.Testimonies);
    } else {
      console.log('whoops! failed to find testimony!!!');
    }
  }

  public getNextPrevTestimonyData(full_url) {
    this.http.sendCustomGetRequest(full_url + '&token=' + this.authService.getUserToken())
      .subscribe( data => { this.processGetPaginatedTestimony(data); });
  }

  public deleteTestimony(testimony: Testimony) {
    const token = this.authService.getUserToken();
    return this.http.sendDeleteRequest('Testimony/' + testimony.id + '?token=' + token);
  }

  public approveTestimony( testimony: Testimony) {

    const new_header = new Headers();
    const token = this.authService.getUserToken();
    return this.http.sendPutRequest('Testimony/'+ testimony.id + '?token=' + token , testimony, new_header);
  }

}
