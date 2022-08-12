import { Router } from 'express';
import { InMemoryArticleRepository } from '../repository/InMemoryArticleRepository';
import { ArticleService } from '../service/articleService';
const router = Router();

const service = new ArticleService(new InMemoryArticleRepository());

router.get('/', (_, res) => {
  res.status(200).json(service.getArticles());
});

export default router;
