import React, {useContext} from "react";
import { Link } from "react-router-dom";
import menu from '../../src/images/menu.svg'
import AppContext from "../AppContext";
import Menu from "./Menu";

function Navbar() {
  const myContext = useContext(AppContext);
  return (
    <>
    <nav className="navigation">
      <div>
        <Link to="/" className="logo-link">
          <p className="logo">real estate</p>
        </Link>
      </div>
      <div className="links" id="links">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/about" className="link">
          About
        </Link>
        <Link to="/properties" className="link">
          Properties
        </Link>
        <Link to="/contact" className="link">
          Contact Us
        </Link>
      </div>
      <div className="action">
        <span className="signin">Signin</span>
        <span className="signup">Signup</span>
      </div>
      <div className="menu">
        <img src={menu} alt="menu" onClick={myContext.toggleBtn}/>
      </div>
    </nav>
    <div >
      {myContext.toggleMenu && <Menu/>}
    </div>
    </>
  );
}

export default Navbar;
