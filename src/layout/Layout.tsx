import { Footer, Header } from "../components";
import { Outlet } from "react-router-dom";
import { Donation } from "../sections";

export const Layout = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
