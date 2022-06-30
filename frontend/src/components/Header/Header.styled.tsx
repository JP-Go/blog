import { styled } from "solid-styled-components";

export const HeaderContainerStyled = styled("header")`
  background-color: ${({ theme }) => theme?.palletes.light?.secondary};
  margin: 0;
  height: 64px;
	padding: 0rem 2rem;
  color: ${({ theme }) => theme?.palletes.light?.primary};
  font-weight: bold;
  display: flex;
  align-items: center;
  border-bottom: solid 4px ${({ theme }) => theme?.palletes.light?.tertiary};
  margin-bottom: 2rem;

`;
