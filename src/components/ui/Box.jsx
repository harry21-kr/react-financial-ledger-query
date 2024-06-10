import styled from "styled-components";

export const Box = styled.div`
  width: ${({ $width }) => $width ?? "100%"};
  min-width: ${({ $minWidth }) => $minWidth ?? "375px"};
  max-width: ${({ $maxWidth }) => $maxWidth ?? "800px"};
  padding: ${({ $padding }) => $padding ?? "20px"};
  background-color: ${({ $backgroundColor }) => $backgroundColor ?? "white"};
  border-radius: ${({ $borderRadius }) => $borderRadius ?? "16px"};
`;

export default Box;
