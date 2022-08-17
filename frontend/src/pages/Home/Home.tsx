import { For, Component } from 'solid-js';
import Card from '../../components/Card/Card';
import { useGetArticles } from '../../data/hooks/useGetArticles';
import { HomeContainerStyled, HomeMainStyled } from './Home.styled';

const Home: Component = () => {
  const { articles } = useGetArticles();

  return (
    <HomeContainerStyled>
      <HomeMainStyled>
        <For each={articles()}>{(article) => <Card article={article} />}</For>
      </HomeMainStyled>
    </HomeContainerStyled>
  );
};

export default Home;
