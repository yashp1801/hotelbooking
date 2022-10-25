import "./navbar.css";
import { FaBed } from "react-icons/fa";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to={"/"} className = "home__link">Company.</Link>
        <div className="navButtons">
          <button>Login</button>
          <button>Register</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
