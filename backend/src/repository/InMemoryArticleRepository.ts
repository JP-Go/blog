import { Article, ArticleProps } from '../entity/Article';
import { Repository } from './Repository';

let idCounter = 0;

const articles: Article[] = [
  {
    props: {
      id: idCounter++,
      body: 'This is a test',
      created: new Date(),
      title: 'test',
      authorName: 'Name',
      lastUpdate: new Date(),
    },
  },
];

export class InMemoryArticleRepository implements Repository<Article> {
  save(article: Article): Article {
    const newArticle = Article.create(article.props, idCounter++);
    articles.push(newArticle);
    return newArticle;
  }
  findById(id: number): Article | null {
    return articles.filter((a) => a.props.id === id).at(0) ?? null;
  }
  findAll(): Article[] {
    return articles;
  }
}
