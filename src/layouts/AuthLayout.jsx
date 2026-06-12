import { Outlet } from "react-router";
import Header from "../components/header/Header";

function AuthLayout() {
  return (
    <>
      <div className="block md:hidden">
        <Header />
      </div>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default AuthLayout;
