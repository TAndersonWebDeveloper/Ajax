import { Outlet } from "react-router-dom";

import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import DesktopNavbar from "../components/ui/DesktopNavbar";

const Root = () => {
  return (
    <>
      <main className="">
        <DesktopNavbar />
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </>
  );
};

export default Root;
