import { useMutation } from "@tanstack/react-query";
import authApi from "../../api/Auth/auth.api";

const useAuthMutation = () => {
  const { mutateAsync: login } = useMutation({
    mutationFn: ({ id, password }) => authApi.login(id, password),
    onSuccess: (user) => {
      alert("로그인되었습니다.");
      sessionStorage.setItem("token", user.accessToken);
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
    },
    onError: (error) => {
      alert(error.response.data.message);
    },
  });

  return { signUp, login };
};

export default useAuthMutation;
