import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewapisService {

  constructor(private _http: HttpClient) { }
  // newapi
  newsApi = 'https://newsapi.org/v2/everything?q=apple&from=2024-04-22&to=2024-04-22&sortBy=popularity&apiKey=609430c41dcb4ba0bddfd2dc5b4012a2'
  topHeading():Observable<any>
  {
    return this._http.get(this.newsApi)
  }
  // teslaapi
  teslaApi = 'https://newsapi.org/v2/everything?q=tesla&from=2024-03-25&sortBy=publishedAt&apiKey=609430c41dcb4ba0bddfd2dc5b4012a2'
  teslaHeading():Observable<any>
  {
    return this._http.get(this.teslaApi)
  }
  //business
  businessApi = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=609430c41dcb4ba0bddfd2dc5b4012a2';
  businessHeading():Observable<any>{
    return this._http.get(this.businessApi);
  }
  // techcrunch
  techcrunchApi = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=609430c41dcb4ba0bddfd2dc5b4012a2';
  techcrunchHeading():Observable<any>
  {
    return this._http.get(this.techcrunchApi);
  }
  // domain
  domainApi = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=609430c41dcb4ba0bddfd2dc5b4012a2';
  domainHeading():Observable<any>
  {
   return this._http.get(this.domainApi)
  }
}


