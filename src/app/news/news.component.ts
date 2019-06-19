import { Component, OnInit } from '@angular/core';
import{NewsService} from "../service/news.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public articles = [];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getArticles()
      .subscribe(data => this.articles = data['articles']);
  }

}
