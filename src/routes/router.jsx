import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/common/Layout";
import DetailPage from "../pages/DetailPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import { detailPageLoader, homePageLoader, loginPageLoader } from "./loaders";

const router = createBrowserRouter([
  {
    path: "/",
    loader: loginPageLoader,
    element: <LoginPage />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/home/:user",
        loader: homePageLoader,
        element: <HomePage />,
      },
      {
        path: "/detail/:user/:itemId",
        loader: detailPageLoader,
        element: <DetailPage />,
      },
    ],
  },
]);

export default router;
