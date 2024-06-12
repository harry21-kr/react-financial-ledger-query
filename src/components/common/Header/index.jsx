import styled from "styled-components";

const Header = () => {
  return <HeaderWrapper>헤더입니다</HeaderWrapper>;
};

export default Header;

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;

  background: white;
  width: 100%;
  height: 80px;
`;
