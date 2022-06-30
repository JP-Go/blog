import { Component } from "solid-js";
import {
  CardStyled,
  CardTitleStyled,
  CardDescriptionStyled,
  CardSepStyled,
} from "./Card.styled";

const ArticleCard: Component = () => {
  return (
    <CardStyled>
      <CardTitleStyled>A title</CardTitleStyled>
      <CardSepStyled />
      <CardDescriptionStyled>
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
        cillum sint consectetur cupidatat.
      </CardDescriptionStyled>
    </CardStyled>
  );
};

export default ArticleCard;
