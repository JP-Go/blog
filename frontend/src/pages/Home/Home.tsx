import { Component } from "solid-js";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import { HomeContainerStyled, HomeMainStyled } from "./Home.styled";

const Home: Component = () => {
  return (
    <HomeContainerStyled>
      <Header />
      <HomeMainStyled>
        <Card />
        <Card />
        <Card />
      </HomeMainStyled>
    </HomeContainerStyled>
  );
};

export default Home;
