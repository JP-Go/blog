import { Article, ArticleProps } from '../../entity/Article';
import { IRepository } from '../../repository/IRepository';

export class InMemoryArticleRepository implements IRepository<Article> {
  private idCounter = 0;
  private articles: Article[] = [];
  save(props: ArticleProps): Article {
    const newArticle = Article.create(props, ++this.idCounter);
    this.articles.push(newArticle);
    return newArticle;
  }
  findById(id: number): Article | null {
    return this.articles.find((a) => a.id === id) ?? null;
  }
  findAll(): Article[] {
    return this.articles;
  }
}
