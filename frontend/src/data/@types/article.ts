export interface ArticleApiResponse {
  id: number;
  props: {
    title: string;
    body: string;
    lastUpdate: string;
    created: string;
    authorName: string;
  };
}

export interface Article {
  id: number;
  props: {
    title: string;
    body: string;
    lastUpdate: Date;
    authorName: string;
  };
}
