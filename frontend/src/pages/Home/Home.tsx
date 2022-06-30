import { For, Component, createSignal } from "solid-js";
import Card, { CardProps } from "../../components/Card/Card";
import { HomeContainerStyled, HomeMainStyled } from "./Home.styled";

const mockArticles: CardProps[] = [
  {
    meta: {
			slug:'a-title',
      title: "A title",
      description:
        "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      lastUpdated: new Date(),
      author: "JP",
    },
  },
  {
    meta: {
      slug: "another-title",
      title: "Another title",
      description:
        "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      lastUpdated: new Date(),
      author: "JP",
    },
  },
  {
    meta: {
      slug: "and-another-title-title",
      title: "And another title title",
      description:
        "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      lastUpdated: new Date(),
      author: "JP",
    },
  },
];

const Home: Component = () => {
  const [articles] = createSignal<CardProps[]>(mockArticles);

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
