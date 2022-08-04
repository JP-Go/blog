import { Component } from "solid-js";
import {ArticleTitleStyled} from "./Article.styled";
import {useParams} from 'solid-app-router';


const Article: Component = ()=>{

	const {id} = useParams();

	return <ArticleTitleStyled>{id}</ArticleTitleStyled>
}

export default Article;
