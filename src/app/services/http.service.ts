import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService {

  // private  rootURl = 'http://localhost/global_start/public/api/'; // Samy`s Server
  // private  rootURl = 'http://127.0.0.1:8000/api/'; // Bengeos`s Server
  private  rootURl = 'http://api.globalstart.agelgel.net/api/'; // Production`s Server
  public mainURL = 'http://localhost/global_start/public/';
  constructor(private httpRequest: HttpClient) {
  }

  public  sendGetRequest(routeName) {
    return this.httpRequest.get(this.rootURl + routeName);
  }

  public  sendPostRequest(routeName, body, header) {
    return this.httpRequest.post(this.rootURl + routeName, body, header);
  }

  public  sendPutRequest(routeName, body, header) {
    return this.httpRequest.put(this.rootURl + routeName, body, header);
  }

  public sendDeleteRequest(routeName) {
    return this.httpRequest.delete(this.rootURl + routeName);
  }

  public  sendCustomGetRequest(full_url) {
    return this.httpRequest.get(full_url);
  }

  public  sendCustomPostRequest(full_url, body, header) {
    return this.httpRequest.post(full_url, body, header);
  }

  public  sendCustomPutRequest(full_url, body, header) {
    return this.httpRequest.put(full_url, body, header);
  }

  public  sendCustomDeleteRequest(id) {
    return this.httpRequest.delete(id);
  }


}
