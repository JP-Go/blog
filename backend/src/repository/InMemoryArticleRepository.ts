import { Article, ArticleProps } from '../entity/Article';
import { Repository } from './Repository';

let idCounter = 0;

const articles: Article[] = [
  {
    props: {
      body: 'This is a test',
      created: new Date(),
      title: 'test',
      authorName: 'Name',
      lastUpdate: new Date(),
    },
    id: ++idCounter,
  },
  {
    props: {
      body: 'This is a test',
      created: new Date(),
      title: 'test',
      authorName: 'Name',
      lastUpdate: new Date(),
    },
    id: ++idCounter,
  },
];

export class InMemoryArticleRepository implements Repository<Article> {
  save(article: ArticleProps): Article {
    const newArticle = Article.create(article, ++idCounter);
    articles.push(newArticle);
    return newArticle;
  }
  findById(id: number): Article | null {
    console.log(articles);
    const result = articles.find((a) => a.id === id) ?? null;
    return result;
  }
  findAll(): Article[] {
    return articles;
  }
}
