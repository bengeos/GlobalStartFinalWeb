import {Component, OnInit, TemplateRef} from '@angular/core';
import {NewsService} from '../services/news.service';
import {News,  PaginatedNews} from './news.objects';
import {BsModalService, BsModalRef} from 'ngx-bootstrap';
import {HttpService} from "../../services/http.service";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styles: []
})
export class NewsComponent implements OnInit {
  public paginated_news = new PaginatedNews();
  public new_news = new News();
  public selected_news = new News();
  public modalRef: BsModalRef;
  public image_art: any;
  public image_url = '';
  constructor(private newsService: NewsService, private modalService: BsModalService, private httpService: HttpService) {
    this.image_url = this.httpService.mainURL;
  }
  ngOnInit() {
    this.updateNewsComponent();
    this.newsService.paginatedNews.subscribe(
      data => { this.paginated_news = data; });

  }
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  public getNextPrevTodayNewsData(full_path: String) {
    this.newsService.getNextPrevTodayNewsData(full_path);
  }
  public updateNewsComponent() {
    this.newsService.getPaginatedNews();
  }
  public onAddNews(form:NgForm) {
    this.newsService.addNews(this.new_news,this.image_art).subscribe(
      data => { this.updateNewsComponent();});
    form.reset();
  }
  public onEditNews(news) {
    this.selected_news = news;
  }
  public updateNews() {
    this.newsService.updateNews(this.selected_news).subscribe(
      data => {this.updateNewsComponent(); });
  }
  public deleteNews() {
    this.newsService.deleteNews(this.selected_news).subscribe(
      data => { this.updateNewsComponent(); });
  }
  public parseDate(date) {
    this.selected_news.updated_at = date;
    return date;
  }

  public onImageFileChange(event) {
    this.image_art = event.target.files;
  }
}
