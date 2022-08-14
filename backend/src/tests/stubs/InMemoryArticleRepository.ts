import { Article, ArticleProps } from '../../entity/Article';
import { IRepository } from '../../repository/IRepository';

let idCounter = 0;
const articles: Article[] = [];

export class InMemoryArticleRepository implements IRepository<Article> {
  save(props: ArticleProps): Article {
    const newArticle = Article.create(props, ++idCounter);
    articles.push(newArticle);
    return newArticle;
  }
  findById(id: number): Article | null {
    return articles.find((a) => a.id === id) ?? null;
  }
  findAll(): Article[] {
    return articles;
  }
}
