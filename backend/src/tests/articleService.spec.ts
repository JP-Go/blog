import { InMemoryArticleRepository } from './stubs/InMemoryArticleRepository';
import { ArticleService } from '../service/articleService';
import { Article, ArticleInputProps, ArticleProps } from '../entity/Article';

describe('articleService tests', () => {
  let ut: ArticleService;
  let inputPropsStub: ArticleInputProps;
  const now = new Date();

  beforeEach(() => {
    ut = new ArticleService(new InMemoryArticleRepository());
  });

  beforeAll(() => {
    inputPropsStub = {
      title: 'test title',
      body: 'The body of the test article',
      authorName: 'Test',
    };
  });

  it('should be able to get all articles', () => {
    expect(ut.findAll()).toBeTruthy();
    expect(ut.findAll()).toHaveLength(0);
  });

  describe('should be able to save new articles if provided the right parameters', () => {
    it('shoud be able to save one article with the right data', () => {
      const article = ut.save(inputPropsStub);
      expect(article).toBeInstanceOf(Article);
      expect(article.id).toBe(1);
      expect(article).toHaveProperty('props');
      expect(article.props.created >= now).toBe(true);
      expect(article.props.lastUpdate >= now).toBe(true);
      expect(ut.findAll()).toHaveLength(1);
    });

    it('should be able to save multiple articles', () => {
      const articles = new Array(4).fill(0).map(() => ut.save(inputPropsStub));
      const ids = articles.map((e) => e.id);
      expect(articles.filter((e) => e instanceof Article)).toHaveLength(4);
      expect(ids.every((e) => typeof e === 'number')).toBe(true);
      expect(
        ids.map((e, idx) => ids.indexOf(e) === idx).every((e) => e === true)
      ).toBe(true);

      expect(articles.every((a) => a.props !== undefined)).toBe(true);
    });

    it('should throw if invalid paramaters are passed', () => {
      const notEnoughArguments: any = { title: 'test' };
      const exaustiveArguments: any = { ...inputPropsStub, age: 12 };
      const invalidArguments: any = {
        title: 'test',
        body: 'text',
        age: 12,
      };
      expect(() => {
        ut.save(notEnoughArguments);
      }).toThrow();
      expect(() => {
        ut.save(exaustiveArguments);
      }).toThrow();
      expect(() => {
        ut.save(invalidArguments);
      }).toThrow();
    });
  });

  describe('Should be able to get articles by id', () => {
    it.todo('should get the article with corresponding id if present');
    it.todo('should throw error if article if not found independent of reason');
  });
});
