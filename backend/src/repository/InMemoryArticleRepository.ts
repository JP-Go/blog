import { Article, ArticleProps } from '../entity/Article';
import { Repository } from './Repository';

let idCounter = 0;

const articles: Article[] = [
  Article.create(
    {
      body: 'This is a test',
      created: new Date(),
      title: 'test',
      authorName: 'Name',
      lastUpdate: new Date(),
    },
    ++idCounter
  ),
];

export class InMemoryArticleRepository implements Repository<Article> {
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
