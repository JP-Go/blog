import { Router } from 'express';
import { InMemoryArticleRepository } from '../repository/InMemoryArticleRepository';
import { ArticleService } from '../service/articleService';
const router = Router();

const service = new ArticleService(new InMemoryArticleRepository());

router.get('/', (_, res) => {
  res.status(200).json(service.getArticles());
});

router.get('/:id', (req, res) => {
  const result = service.getById(parseInt(req.params.id, 10));
  if (result === null) {
    res.status(404).json({ message: 'Article not found' });
    return;
  }
  res.status(200).json({ data: result });
});

export default router;
