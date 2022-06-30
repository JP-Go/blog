import { styled } from "solid-styled-components";

export const CardStyled = styled("div")`
  border-radius: 0.5rem;
	color: ${(props) => props.theme?.palletes.light?.tertiary};
  padding: 1rem 1rem;
  border: solid 2px ${(props) => props.theme?.palletes.light?.fg};
  width: clamp(100px, 600px, 640px);
  height: clamp(20%, 240px, 300px);
  transition: all ease 200ms;

  &:hover {
    transform: scale(1.1);
  }
`;
export const CardTitleStyled = styled("h2")`
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
`;
export const CardSepStyled = styled("div")`
  width: 100%;
  margin: 1rem 0;
  height: 2px;
  background-color: ${(props) => props.theme?.palletes.light?.tertiary};
`;

export const CardDescriptionStyled = styled("p")`
  width: 100%;
  height: fit-content;
	color: ${(props) => props.theme?.palletes.light?.fg};
`;
