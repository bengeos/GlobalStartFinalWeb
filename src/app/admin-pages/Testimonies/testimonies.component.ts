import {Component, OnInit, TemplateRef} from '@angular/core';
import {TestimoniesService} from "../services/testimonies.service";
import {PaginatedTestimonies, Testimony} from "./testimony.objects";
import {HttpService} from "../../services/http.service";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
declare const swal: any;
@Component({
  selector: 'app-testimonies',
  templateUrl: './testimonies.component.html',
  styles: []
})
export class TestimoniesComponent implements OnInit {
  public paginated_testimony = new PaginatedTestimonies();
  public selected_testimony = new Testimony();
  public image_url = '';
  public modalRef: BsModalRef;
  constructor(private tesimonyService: TestimoniesService,private modalService: BsModalService, private httpService: HttpService) {
    this.image_url = httpService.mainURL;
  }

  ngOnInit() {

    this.updateTestimonyComponent();
    this.tesimonyService.paginatedTestimony.subscribe(
      data => { this.paginated_testimony = data; });
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  public getNextPrevTodaTestimonyData(full_path: String) {
    this.tesimonyService.getNextPrevTestimonyData(full_path);
  }
  public updateTestimonyComponent() {
    this.tesimonyService.getPaginatedTestimonies();
  }
  public onEditTestimony(testimony) {
    this.selected_testimony = testimony;
  }
  public deleteTestimony() {
    this.tesimonyService.deleteTestimony(this.selected_testimony).subscribe(
      data => { this.updateTestimonyComponent(); });
  }
  public approve() {
    this.tesimonyService.approveTestimony(this.selected_testimony).subscribe(
      data => {this.updateTestimonyComponent(); this.showSwalMessage('Testimony Posted!!!') }
    );
  }
  public showSwalMessage(title: String) {
    swal({
      title: title,
      buttonsStyling: true,
      confirmButtonClass: 'btn btn-primary'
    });
  }
}
