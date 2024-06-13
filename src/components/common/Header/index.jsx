import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import useAuthQuery from "../../../hooks/query/useAuthQuery";
import { Button } from "../../ui";

const Header = () => {
  const navigate = useNavigate();
  const accessToken = sessionStorage.getItem("token");

  const user = useAuthQuery(accessToken);

  const logout = () => {
    sessionStorage.removeItem("token");
    toast.success("성공적으로 로그아웃 되었습니다!");
    navigate("/");
  };

  return (
    <HeaderWrapper>
      <HeaderContentWrapper>
        <HeaderUserText>{user?.nickname}</HeaderUserText>
        <HeaderButton onClick={logout}>로그아웃</HeaderButton>
      </HeaderContentWrapper>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;

  background: #64dbd0;
  width: 100%;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderUserText = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

const HeaderContentWrapper = styled.div`
  width: 100%;
  max-width: 840px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderButton = styled(Button)`
  background: #1f867c;
`;
