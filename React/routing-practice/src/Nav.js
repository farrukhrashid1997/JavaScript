import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const style = {
    color: "white",
  };
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link style={style} to="/about">
          <li>About</li>
        </Link>
        <Link style={style} to="/shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
