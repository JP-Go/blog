import { Component } from 'solid-js';
import { Link } from 'solid-app-router';
import {
  CardStyled,
  CardTitleStyled,
  CardDescriptionStyled,
  CardSepStyled,
  CardFooterStyled,
} from './Card.styled';
import { Article } from '../../data/@types/article';

const LOCALE = 'pt-BR';

interface CardProps {
  article: Article;
}

const Card: Component<CardProps> = ({ article }: CardProps) => {
  const { id, props } = article;
  console.log(props);
  return (
    <Link href={`/articles/${id}`} style="text-decoration:none">
      <CardStyled>
        <CardTitleStyled>{props.title}</CardTitleStyled>
        <CardSepStyled />
        <CardDescriptionStyled>{props.body}</CardDescriptionStyled>
        <CardFooterStyled>
          <span>{props.lastUpdate.toLocaleDateString(LOCALE)}</span>
          <span>{props.authorName}</span>
        </CardFooterStyled>
      </CardStyled>
    </Link>
  );
};

export default Card;
