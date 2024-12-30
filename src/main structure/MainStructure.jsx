import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainStructure() {
  return (
    <div>
      {/* navbar */}
      <Navbar></Navbar>

      {/* outlet */}
      <div className="max-w-7xl mx-auto">
        <Outlet></Outlet>
      </div>

      {/* footer */}
      <Footer></Footer>
    </div>
  );
}

export default MainStructure;
