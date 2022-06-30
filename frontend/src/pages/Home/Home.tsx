import { For, Component, createSignal } from "solid-js";
import Header from "../../components/Header/Header";
import Card, { CardProps } from "../../components/Card/Card";
import { HomeContainerStyled, HomeMainStyled } from "./Home.styled";

const mockArticles: CardProps[] = [
  {
    meta: {
      title: "A title",
      description:
        "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      lastUpdated: new Date(),
      author: "JP",
    },
  },
  {
    meta: {
      title: "Another title",
      description:
        "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      lastUpdated: new Date(),
      author: "JP",
    },
  },
  {
    meta: {
      title: "And another title title",
      description:
        "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      lastUpdated: new Date(),
      author: "JP",
    },
  },
];

const Home: Component = () => {
  // @ts-ignore: next-line
  const [articles] = createSignal<CardProps[]>(mockArticles);

  return (
    <HomeContainerStyled>
      <Header />
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
