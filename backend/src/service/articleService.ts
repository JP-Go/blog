import { Article, ArticleInputProps, ArticleProps } from '../entity/Article';
import { Repository } from '../repository/Repository';

export class ArticleService {
  constructor(private articleRepository: Repository<Article>) {}

  public findAll(): Article[] {
    const result = this.articleRepository.findAll();
    return result;
  }

  findById(id: number): Article | null {
    const existingArticle = this.articleRepository.findById(id);
    return existingArticle;
  }

  public save(inputProps: ArticleInputProps): Article {
    const props: ArticleProps = {
      title: inputProps.title,
      body: inputProps.body,
      authorName: inputProps.authorName,
      created: new Date(),
      lastUpdate: new Date(),
    };

    const article = this.articleRepository.save(props);
    return article;
  }
}
