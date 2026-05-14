import { Link } from "react-router";
import "../css/navBar.css"
function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"loginPage"}>LoginPage</Link>
        </li>
        <li>
          <Link to={"registerPage"}>RegisterPage</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
