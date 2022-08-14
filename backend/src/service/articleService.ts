import { Article } from '../entity/Article';
import { Repository } from '../repository/Repository';

export class ArticleService {
  constructor(private articleRepository: Repository<Article>) {}

  public getArticles(): Article[] {
    const result = this.articleRepository.findAll();
    return result;
  }
}
