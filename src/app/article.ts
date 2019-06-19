export class Article {
  source: Source[];
  title: string;
  url: string;
  urlToImage: string;
  content: string;
}

export class Source {
  id: string;
  name: string;
}
