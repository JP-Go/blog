import { Component } from "solid-js";
import {
  CardStyled,
  CardTitleStyled,
  CardDescriptionStyled,
  CardSepStyled,
  CardFooterStyled,
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
      <CardFooterStyled>
        <span>30.06.2022</span>
        <span>João Pedro</span>
      </CardFooterStyled>
    </CardStyled>
  );
};

export default ArticleCard;
