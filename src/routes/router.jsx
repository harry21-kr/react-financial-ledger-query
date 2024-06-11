import { createBrowserRouter, redirect } from "react-router-dom";

import authApi from "../api/Auth/auth.api";
import DetailPage from "../pages/DetailPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/home/:user",
    loader: async () => {
      const token = sessionStorage.getItem("token");
      if (!token) return redirect("/");
      return authApi.getUserData(token);
    },
    element: <HomePage />,
  },
  {
    path: "/detail/:user/:itemId",
    loader: async () => {
      const token = sessionStorage.getItem("token");
      if (!token) return redirect("/");
      return authApi.getUserData(token);
    },
    element: <DetailPage />,
  },
]);

export default router;
