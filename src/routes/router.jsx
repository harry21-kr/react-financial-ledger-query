import { createBrowserRouter } from "react-router-dom";
import DetailPage from "../pages/DetailPage/DetailPage";
import HomePage from "../pages/HomePage/HomePage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/detail/:itemId", element: <DetailPage /> },
]);

export default router;
