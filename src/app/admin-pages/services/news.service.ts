import {Injectable, EventEmitter} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {HttpService} from '../../services/http.service';
import {HttpHeaders} from '@angular/common/http';
import {News, PaginatedNews} from '../news/news.objects';
import {Headers} from '@angular/http';

@Injectable()
export class NewsService {
  public paginatedNews = new EventEmitter<PaginatedNews>();
  constructor(private authService: AuthService , private http: HttpService) { }
  public getPaginatedNews() {
    const token = this.authService.getUserToken();
    return this.http.sendGetRequest('news?token=' + token).subscribe(
      data => {this.processGetPaginatedNews(data); },
      error => {console.log(error); });
  }
  public processGetPaginatedNews(news_data) {
    if (news_data && news_data.status && news_data.news) {
      this.paginatedNews.emit(news_data.news);
    } else {
      console.log('whoops! failed to find news');
    }
  }


  public getNextPrevTodayNewsData(full_url) {
    this.http.sendCustomGetRequest(full_url + '&token=' + this.authService.getUserToken())
      .subscribe( data => { this.processGetPaginatedNews(data); });
  }
  public addNews(news: News) {
    const token = this.authService.getUserToken();
    const new_header = new Headers();
    return this.http.sendPostRequest('news?token=' + token, news, new_header);
  }
  public updateNews( UpdatedNews: News) {
    console.log('update_news', UpdatedNews);
    const new_header = new Headers();
    const token = this.authService.getUserToken();
    return this.http.sendPutRequest('news?token=' + token, UpdatedNews, new_header);
  }
  public deleteNews(news: News) {
    const token = this.authService.getUserToken();
    return this.http.sendDeleteRequest('news/' + news.id + '?token=' + token);
  }

}
