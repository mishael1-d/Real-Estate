import React, {useContext} from "react";
import { Link } from "react-router-dom";
import "../../src/styles/menu.css";
import AppContext from "../AppContext";

const Menu = () => {
  const myContext = useContext(AppContext)
  return (
    <div className="menuBtn">
      <div className="menu-links">
        <Link to="/" className="page-link" onClick={myContext.hidebar}>
          Home
        </Link>
        <Link to="/about" className="page-link" onClick={myContext.hidebar}>
          About
        </Link>
        <Link to="/properties" className="page-link" onClick={myContext.hidebar}>
          Properties
        </Link>
        <Link to="/contact" className="page-link" onClick={myContext.hidebar}>
          Contact Us
        </Link>
      </div>
      <div className="menu-action">
        <span className="signin">Signin</span>
        <span className="signup">Signup</span>
      </div>
    </div>
  );
};

export default Menu;
