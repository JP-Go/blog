import { Router } from 'express';
import { InMemoryArticleRepository } from '../repository/InMemoryArticleRepository';
import { ArticleService } from '../service/articleService';

const articles = Router();
const NUMBERING_BASE = 10;

const service = new ArticleService(new InMemoryArticleRepository());

articles.get('/', (_, res) => {
  res.status(200).json(service.findAll());
});

articles.get('/:id', (req, res) => {
  const id = parseInt(req.params.id, NUMBERING_BASE);
  const article = service.findById(id);
  article !== null
    ? res.status(200).json(article)
    : res.status(400).json({
        error: 'Article not found',
        message: 'Provided id does not reference any article in the database',
      });
});

export default articles;
