import { createBrowserRouter } from "react-router-dom";

import DetailPage from "../pages/DetailPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  { path: "/home", element: <HomePage /> },
  { path: "/detail/:itemId", element: <DetailPage /> },
]);

export default router;
