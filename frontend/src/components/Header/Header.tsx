import { Component } from "solid-js";
import { HeaderContainerStyled } from "./Header.styled";

const Header: Component = () => {
  return (
    <HeaderContainerStyled>
      <h1>JP's Blog</h1>
    </HeaderContainerStyled>
  );
};

export default Header;
