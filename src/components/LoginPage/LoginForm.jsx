import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import authApi from "../../api/Auth/auth.api";
import { useUser } from "../../contexts/AuthContext";
import { Button, Input } from "../ui";

export const LoginForm = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const { setUser } = useUser();

  const navigate = useNavigate();

  const { mutateAsync: login } = useMutation({
    mutationFn: ({ id, password }) => authApi.login(id, password),
    onSuccess: (user) => {
      alert("로그인되었습니다.");
      setUser(user);
      sessionStorage.setItem("token", user.accessToken);
      navigate(`/home/${user.userId}`);
    },
    onError: (error) => {
      alert(error.response.data.message);
    },
  });

  const { mutateAsync: signUp } = useMutation({
    mutationFn: ({ id, password, nickname }) =>
      authApi.signUp(id, password, nickname ? nickname : id),
    onSuccess: (user) => {
      alert(user.message);
      setIsLoginMode(true);
    },
    onError: (error) => {
      alert(error.response.data.message);
    },
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    await login({ id, password });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    await signUp({ id, password, nickname });
  };

  return (
    <LoginFormWrapper onSubmit={isLoginMode ? handleLogin : handleSignUp}>
      <LoginText>{isLoginMode ? "로그인" : "회원가입"}</LoginText>
      <LoginInput
        type="text"
        value={id}
        placeholder="아이디를 입력해주세요."
        onChange={(e) => setId(e.target.value)}
      />
      <LoginInput
        type="password"
        value={password}
        placeholder="비밀번호를 입력해주세요."
        onChange={(e) => setPassword(e.target.value)}
      />
      {!isLoginMode && (
        <LoginInput
          type="text"
          value={nickname}
          placeholder="사용하실 닉네임을 입력해주세요."
          onChange={(e) => setNickname(e.target.value)}
        />
      )}
      <LoginSubmitButton type="submit">
        {isLoginMode ? "로그인" : "회원가입"}
      </LoginSubmitButton>
      <LoginModeButton
        type="button"
        onClick={() => setIsLoginMode(!isLoginMode)}
      >
        아직 회원이 아니신가요? <span>회원가입</span>
      </LoginModeButton>
    </LoginFormWrapper>
  );
};

const LoginFormWrapper = styled.form`
  width: 100%;
  max-width: 400px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const LoginInput = styled(Input)`
  height: 40px;
`;

const LoginSubmitButton = styled(Button)`
  height: 40px;
  color: black;
`;

const LoginModeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  & > span {
    color: blue;
  }
`;

const LoginText = styled.h2`
  font-size: 40px;
  color: white;
  text-align: center;
`;
