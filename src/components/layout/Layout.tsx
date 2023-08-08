import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components/components";
import "./layout.css";

const Layout = () => (
  <div className="container">
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
