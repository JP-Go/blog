import { styled } from "solid-styled-components";
export const HomeContainerStyled = styled("div")`
  background-color: ${({ theme }) => theme?.palletes.light?.primary};
  margin: 0;
  padding: 0;
  height: 100vh;
`;

export const HomeMainStyled = styled("main")`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.25rem;
`;
