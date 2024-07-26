import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div>
      <Navbar />
      <div>
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
