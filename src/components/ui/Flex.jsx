import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ $flexDirection }) => $flexDirection};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  align-items: ${({ $alignItems }) => $alignItems};
  gap: ${({ $gap }) => $gap};
  flex-wrap: ${({ $flexWrap }) => $flexWrap};
`;

export default Flex;
