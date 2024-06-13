import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import authApi from "../../api/Auth/auth.api";

const useAuthMutation = () => {
  const { mutateAsync: login } = useMutation({
    mutationFn: ({ id, password }) => {
      toast.loading("로그인 중 ...", { toastId: "loadingToast" });
      return authApi.login(id, password);
    },
    onSuccess: (user) => {
      toast.dismiss("loadingToast");
      toast.info(`반가워요 ${user.nickname}님!`);
      sessionStorage.setItem("token", user.accessToken);
    },
    onError: (error) => {
      toast.dismiss("loadingToast");
      toast.error(error.response.data.message);
    },
  });

  const { mutateAsync: signUp } = useMutation({
    mutationFn: ({ id, password, nickname }) => {
      toast.loading("회원가입 중 ...", { toastId: "loadingToast" });
      return authApi.signUp(id, password, nickname ? nickname : id);
    },
    onSuccess: (user) => {
      toast.dismiss("loadingToast");
      toast.success(user.message);
    },
    onError: (error) => {
      toast.dismiss("loadingToast");
      toast.error(error.response.data.message);
    },
  });

  return { signUp, login };
};

export default useAuthMutation;
