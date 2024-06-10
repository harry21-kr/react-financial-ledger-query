import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import styled from "styled-components";
import authApi from "../../api/Auth/auth.api";
import { useUser } from "../../contexts/AuthContext";
import { Button, Input } from "../ui";

export const LoginForm = () => {
  const [id, setId] = useState("harry21");
  const [password, setPassword] = useState("password");

  const { user, setUser } = useUser();

  const { mutateAsync: login } = useMutation({
    mutationFn: ({ id, password }) => authApi.login(id, password),
    onSuccess: (user) => setUser(user),
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    await login({ id, password });
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <LoginFormWrapper onSubmit={handleLogin}>
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
      <LoginSubmitButton type="submit">로그인</LoginSubmitButton>
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
