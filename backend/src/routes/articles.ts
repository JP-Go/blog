import { Request, Response, Router } from 'express';
import { ArticleInputProps } from '../entity/Article';
import { InMemoryArticleRepository } from '../tests/stubs/InMemoryArticleRepository';
import { ArticleService } from '../service/articleService';

const articles = Router();
const NUMBERING_BASE = 10;

const articleService = new ArticleService(new InMemoryArticleRepository());

articles.get('/', (_, res: Response) => {
  res.status(200).json(articleService.findAll());
});

articles.get('/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id, NUMBERING_BASE);
  const article = articleService.findById(id);
  article !== null
    ? res.status(200).json(article)
    : res.status(400).json({
        error: 'Article not found',
        message: 'Provided id does not reference any article in the database',
      });
});

articles.post('/', (req: Request<{}, {}, ArticleInputProps>, res: Response) => {
  try {
    const article = articleService.save(req.body);
    res.status(201).json(article);
  } catch (error) {
    res.status(400).json({
      error,
      message: 'Error creating article',
    });
  }
});

export default articles;
