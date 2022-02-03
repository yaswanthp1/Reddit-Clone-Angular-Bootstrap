export class Article {
  title: string;
  link: string;
  votes: number;

  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }
  upVote() {
    this.votes += 1;
  }

  downVote() {
    this.votes -= 1;
  }
}
