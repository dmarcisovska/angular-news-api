import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import {Observable} from 'rxjs';
import{Config} from "../config";
import{Article} from "../article";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private api = Config.API_KEY;
  public url ='https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' + this.api;

  constructor(private http: HttpClient) { }

  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.url);
  }

}
