import { Article, ArticleInputProps, ArticleProps } from '../entity/Article';
import { IRepository } from '../repository/IRepository';

export class ArticleService {
  constructor(private articleRepository: IRepository<Article>) {}

  public findAll(): Article[] {
    const result = this.articleRepository.findAll();
    return result;
  }

  findById(id: number): Article | null {
    const existingArticle = this.articleRepository.findById(id);
    return existingArticle;
  }

  public save(inputProps: any): Article {
    // TODO: Create Article assembler to fix this code

    const validInputProps = inputProps as ArticleInputProps;

    if (Object.keys(validInputProps).length !== 3) {
      throw 'Too many of not enough properties passed';
    }

    if (!validInputProps.title && typeof validInputProps.title !== 'string') {
      throw `Invalid value for title: expected 'string' but got ${typeof validInputProps.title}`;
    }

    if (
      !validInputProps.authorName &&
      typeof validInputProps.authorName !== 'string'
    ) {
      throw `Invalid value for authorName: expected 'string' but got ${typeof validInputProps.authorName}`;
    }

    if (!validInputProps.body && typeof validInputProps.body !== 'string') {
      throw `Invalid value for body: expected 'string' but got ${typeof validInputProps.body}`;
    }

    const props: ArticleProps = {
      title: validInputProps.title,
      body: validInputProps.body,
      authorName: validInputProps.authorName,
      created: new Date(),
      lastUpdate: new Date(),
    };

    const article = this.articleRepository.save(props);
    return article;
  }
}
