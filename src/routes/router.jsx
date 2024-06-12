import { createBrowserRouter, redirect } from "react-router-dom";

import authApi from "../api/Auth/auth.api";
import paymentHistoryApi from "../api/PaymentHistory/paymentHistory.api";
import Layout from "../components/common/Layout";
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
    element: <Layout />,
    children: [
      {
        path: "/home/:user",
        loader: async ({ params }) => {
          try {
            const token = sessionStorage.getItem("token");
            const user = await authApi.getUserData(token);
            if (params.user !== user.id) return redirect(`/home/${user.id}`);
            return paymentHistoryApi.getPaymentHistoryById(user.id);
          } catch (err) {
            sessionStorage.removeItem("token");
            return redirect("/");
          }
        },
        element: <HomePage />,
      },
      {
        path: "/detail/:user/:itemId",
        loader: async ({ params }) => {
          try {
            const token = sessionStorage.getItem("token");
            const user = await authApi.getUserData(token);
            if (params.user !== user.id) return redirect(`/home/${user.id}`);
            return paymentHistoryApi.getPaymentHistoryByItemId(params.itemId);
          } catch (err) {
            sessionStorage.removeItem("token");
            return redirect("/");
          }
        },
        element: <DetailPage />,
      },
    ],
  },
]);

export default router;
