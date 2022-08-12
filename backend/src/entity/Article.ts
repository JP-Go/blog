import { Entity } from './Entity';

export type ArticleProps = {
  id: number;
  title: string;
  body: string;
  authorName: string;
  created: Date;
  lastUpdate: Date;
};

export class Article extends Entity<ArticleProps> {
  private constructor(props: ArticleProps, id?: number) {
    super(props, id);
  }

  public static create(props: ArticleProps, id?: number): Article {
    const article = new Article(props, id);
    return article;
  }
}
