import { Component } from "solid-js";
import {
  CardStyled,
  CardTitleStyled,
  CardDescriptionStyled,
  CardSepStyled,
  CardFooterStyled,
} from "./Card.styled";

export interface CardProps {
  meta: {
    title: string;
    description: string;
    lastUpdated: Date;
    author: string;
  };
}

const LOCALE = "pt-BR";

const Card: Component<CardProps> = ({
  meta,
}: CardProps) => {
  return (
    <CardStyled>
      <CardTitleStyled>{meta.title}</CardTitleStyled>
      <CardSepStyled />
      <CardDescriptionStyled>{meta.description}</CardDescriptionStyled>
      <CardFooterStyled>
        <span>{meta.lastUpdated.toLocaleDateString(LOCALE)}</span>
        <span>{meta.author}</span>
      </CardFooterStyled>
    </CardStyled>
  );
};

export default Card;
