import { For, Component, createSignal, createEffect } from "solid-js";
import Card, { CardProps } from "../../components/Card/Card";
import { HomeContainerStyled, HomeMainStyled } from "./Home.styled";
import {mockApi} from "../../data/api/apiService";

const Home: Component = () => {

  const [articles,setArticles] = createSignal<CardProps[]>([]);

	createEffect(()=>{
		const articles = mockApi.getArticles();
		setArticles(articles)
	})

  return (
    <HomeContainerStyled>
      <HomeMainStyled>
        <For each={articles()}>
          {({ meta }) => (
            <Card meta={meta} />
          )}
        </For>
      </HomeMainStyled>
    </HomeContainerStyled>
  );
};

export default Home;
