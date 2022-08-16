import { InMemoryArticleRepository } from './stubs/InMemoryArticleRepository';
import { ArticleService } from '../service/articleService';
import { Article, ArticleInputProps } from '../entity/Article';

const inputPropsStub: ArticleInputProps = {
  title: 'test title',
  body: 'The body of the test article',
  authorName: 'Test',
};
const now = new Date();

describe('ArticleService tests: An ArticleService', () => {
  let sut: ArticleService;

  beforeAll(() => {
    sut = new ArticleService(new InMemoryArticleRepository());
  });

  describe('should be able to save articles', () => {
    it('shoud be able to save one article with the right data', () => {
      const article = sut.save(inputPropsStub);
      expect(article).toBeInstanceOf(Article);
      expect(article.id).toBe(1);
      expect(article).toHaveProperty('props');
      expect(article.props.created >= now).toBe(true);
      expect(article.props.lastUpdate >= now).toBe(true);
      expect(sut.findAll()).toHaveLength(1);
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
        sut.save(notEnoughArguments);
      }).toThrow();
      expect(() => {
        sut.save(exaustiveArguments);
      }).toThrow();
      expect(() => {
        sut.save(invalidArguments);
      }).toThrow();
    });
  });

  describe('Should be able to get articles', () => {
    it('should be able to return a collection of articles', () => {
      expect(sut.findAll()).toBeInstanceOf(Array<Article>);
    });

    it('should get the article with corresponding id if present', () => {
      const article = sut.findById(1);
      expect(article).toBeInstanceOf(Article);
      expect(article).toHaveProperty('id', 1);
      expect(article).toHaveProperty('props');
      expect(article?.props).toBeTruthy();
    });

    it('should return null if article was not found', () => {
      const sut = new ArticleService(new InMemoryArticleRepository());
      expect(sut.findById(1)).not.toBeNull();
      expect(sut.findById(2)).toBeNull();
    });
  });

  describe('Shoud be able to update articles', () => {
    it.todo('shoud update the properties of the article');
    it.todo('should not be able to update the articles id');
  });

  describe('Shoud be able to delete articles', () => {
    it.todo('should delete article if present');
    it.todo('should throw if article is not found');
  });
});
