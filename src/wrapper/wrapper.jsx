import { Outlet } from "react-router";
import Navbar from "../components/navBar";
function Wrapper() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
export default Wrapper;
