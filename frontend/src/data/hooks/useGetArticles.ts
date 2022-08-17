import axios, { AxiosResponse } from 'axios';
import { createEffect, createSignal } from 'solid-js';
import { Article, ArticleApiResponse } from '../@types/article';

const BASE_URL = 'http://localhost:5000';

const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

export const useGetArticles = () => {
  const [articles, setArticles] = createSignal<Article[]>([]);

  createEffect(() => {
    api.get('/articles').then((res: AxiosResponse<ArticleApiResponse[]>) => {
      const data = res.data;
      const articles = data.map((article) => {
        const { id, props } = article;
        return {
          id,
          props: {
            ...props,
            lastUpdate: new Date(props.lastUpdate),
          },
        };
      });
      setArticles(articles);
    });
  });

  return {
    articles,
  };
};
