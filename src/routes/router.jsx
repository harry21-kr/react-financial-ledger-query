import { createBrowserRouter, redirect } from "react-router-dom";

import paymentHistoryApi from "../api/PaymentHistory/paymentHistory.api";
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
    loader: async ({ params }) => {
      const token = sessionStorage.getItem("token");
      if (!token) return redirect("/");
      return paymentHistoryApi.getPaymentHistoryById(params.user);
    },
    element: <HomePage />,
  },
  {
    path: "/detail/:user/:itemId",
    loader: async ({ params }) => {
      const token = sessionStorage.getItem("token");
      if (!token) return redirect("/");
      return paymentHistoryApi.getPaymentHistoryById(params.user);
    },
    element: <DetailPage />,
  },
]);

export default router;
