import { Component } from "solid-js";
import { Link } from "solid-app-router";
import {
  CardStyled,
  CardTitleStyled,
  CardDescriptionStyled,
  CardSepStyled,
  CardFooterStyled,
} from "./Card.styled";

export interface CardProps {
  meta: {
    slug: string;
    title: string;
    description: string;
    lastUpdated: Date;
    author: string;
  };
}

const LOCALE = "pt-BR";

const Card: Component<CardProps> = ({ meta }: CardProps) => {
  return (
    <Link href={`/article/${meta.slug}`} style="text-decoration:none">
      <CardStyled>
        <CardTitleStyled>{meta.title}</CardTitleStyled>
        <CardSepStyled />
        <CardDescriptionStyled>{meta.description}</CardDescriptionStyled>
        <CardFooterStyled>
          <span>{meta.lastUpdated.toLocaleDateString(LOCALE)}</span>
          <span>{meta.author}</span>
        </CardFooterStyled>
      </CardStyled>
    </Link>
  );
};

export default Card;
