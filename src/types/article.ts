export interface Article {
  id: string;
  title: string;
}

export interface DataObject {
  articles: Article[];
  description: string;
  title: string;
}
