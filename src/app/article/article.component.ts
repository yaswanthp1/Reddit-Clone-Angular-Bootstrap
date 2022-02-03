import { Component, OnInit, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  @Input() article!: Article;

  constructor() {
    this.article = new Article('Angular', 'angular.io', 10);
  }

  upVote() {
    this.article.upVote();
  }

  downVote() {
    this.article.downVote();
  }

  ngOnInit(): void {}
}
