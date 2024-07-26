import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiBars3CenterLeft, HiXMark } from "react-icons/hi2";
import { AuthContext } from "../App";
import Logo from "./Logo";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { isAuthenticated, user, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLogout = () => {
    setAuth(false);
    navigate("/");
  };

  return (
    <div className="links flex justify-between items-center">
      <Logo />
      <nav className={`relative ${isNavOpen ? "block" : "hidden"} md:block`}>
        <ul className="flex justify-between items-center group">
          <li className="transition-opacity duration-300 group-hover:opacity-50 hover:!opacity-100">
            <Link to="/">Home</Link>
          </li>
          <li className="transition-opacity duration-300 group-hover:opacity-50 hover:!opacity-100">
            <Link to="/about">About</Link>
          </li>

          <li className="transition-opacity duration-300 group-hover:opacity-50 hover:!opacity-100">
            <Link to="/contact">Contact Us</Link>
          </li>
          {isAuthenticated ? (
            <>
              <li className="transition-opacity duration-300 group-hover:opacity-50 hover:!opacity-100">
                Welcome, {user.username}
              </li>
              <li className="transition-opacity duration-300 group-hover:opacity-50 hover:!opacity-100">
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li className="transition-opacity duration-300 group-hover:opacity-50 hover:!opacity-100">
                <Link to="/login">Login</Link>
              </li>
              <li className="transition-opacity duration-300 group-hover:opacity-50 hover:!opacity-100">
                <Link to="/signup">Sign Up</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      <div className="icons">
        {isNavOpen ? (
          <HiXMark className="cancel" onClick={toggleNav} />
        ) : (
          <HiBars3CenterLeft className="bars" onClick={toggleNav} />
        )}
      </div>
    </div>
  );
}

export default Navbar;
