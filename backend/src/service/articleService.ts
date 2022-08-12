import { Article } from '../entity/Article';
import { Repository } from '../repository/Repository';

export class ArticleService {
  constructor(private articleRepository: Repository<Article>) {}

  public getArticles(): Article[] {
    return this.articleRepository.findAll();
  }

  public getById(id: number): Article | null {
    return this.articleRepository.findById(id);
  }
}
