import { createBrowserRouter, redirect } from "react-router-dom";

import authApi from "../api/Auth/auth.api";
import paymentHistoryApi from "../api/PaymentHistory/paymentHistory.api";
import DetailPage from "../pages/DetailPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    loader: async () => {
      try {
        const token = sessionStorage.getItem("token");
        const user = await authApi.getUserData(token);
        return redirect(`/home/${user.id}`);
      } catch (err) {
        return null;
      }
    },
    element: <LoginPage />,
  },
  {
    path: "/home/:user",
    loader: async () => {
      try {
        const token = sessionStorage.getItem("token");
        const user = await authApi.getUserData(token);
        return paymentHistoryApi.getPaymentHistoryById(user.id);
      } catch (err) {
        return redirect("/");
      }
    },
    element: <HomePage />,
  },
  {
    path: "/detail/:user/:itemId",
    loader: async () => {
      try {
        const token = sessionStorage.getItem("token");
        const user = await authApi.getUserData(token);
        return paymentHistoryApi.getPaymentHistoryById(user.id);
      } catch (err) {
        return redirect("/");
      }
    },
    element: <DetailPage />,
  },
]);

export default router;
