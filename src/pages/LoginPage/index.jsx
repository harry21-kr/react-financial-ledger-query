import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "../../components/LoginPage";
import { DefaultLayout } from "../../components/ui";
import { useUser } from "../../contexts/AuthContext";

const LoginPage = () => {
  const { user } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate(`/home/${user.userId}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <DefaultLayout>
      <LoginForm />
    </DefaultLayout>
  );
};

export default LoginPage;
