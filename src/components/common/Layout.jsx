import { Outlet } from "react-router-dom";
import { DefaultLayout } from "../ui";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <DefaultLayout>
        <Outlet />
      </DefaultLayout>
    </>
  );
};

export default Layout;
