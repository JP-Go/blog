import { Article } from '../entity/Article';
import { InMemoryArticleRepository } from '../repository/InMemoryArticleRepository';

describe('InMemoryArticleRepository Tests', () => {
  let ut: InMemoryArticleRepository;

  beforeEach(() => {
    ut = new InMemoryArticleRepository();
  });

  it('should have only one article when instantiated', () => {
    expect(ut.findAll().length).toBe(1);
  });

  describe('should have findById method that', () => {
    it('should return an article if given a valid id', () => {
      const ut = new InMemoryArticleRepository();
      const validArticle = ut.findById(1);
      console.log(validArticle);
      expect(validArticle).toBeInstanceOf(Article);
      expect(validArticle).toHaveProperty('id', 1);
      expect(validArticle?.props).toBeTruthy();
    });

    it('should return null if given an id that does not correspond to an article', () => {
      const invalidArticle = ut.findById(0);
      expect(invalidArticle).toBeNull();
    });
  });
});
