import styled from "styled-components";

export const Text = styled.p`
  font-size: ${({ $fontSize }) => $fontSize};
  font-weight: ${({ $fontWeight }) => $fontWeight};
  text-align: ${({ $textAlign }) => $textAlign};
  color: ${({ $color }) => $color};
`;

export default Text;
