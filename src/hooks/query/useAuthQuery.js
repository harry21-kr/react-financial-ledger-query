import { useQuery } from "@tanstack/react-query";
import authApi from "../../api/Auth/auth.api";

const useAuthQuery = (accessToken) => {
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: () => authApi.getUserData(accessToken),
  });

  return user;
};

export default useAuthQuery;
