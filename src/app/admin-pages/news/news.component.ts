import {Component, OnInit, TemplateRef} from '@angular/core';
import {NewsService} from '../services/news.service';
import {News,  PaginatedNews} from './news.objects';
import {BsModalService, BsModalRef} from 'ngx-bootstrap';


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
  constructor(private newsService: NewsService, private modalService: BsModalService,) { }
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
  public onAddNews() {
    this.newsService.addNews(this.new_news).subscribe(
      data => { this.updateNewsComponent(); });
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
}
