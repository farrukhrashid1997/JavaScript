import React, { useState } from "react";

const Navbar = () => {
    const [NavLinkOpen, setNavLinkOpen] = useState(false)
    const renderClass = () => {
         let classes = 'navlinks'
        classes += NavLinkOpen ? " active": ""
        return classes
    }
  return (
    <nav>
      <div class="logo">
        <i className="fas fa-mountain"></i>
        <h4>Mountains</h4>
      </div>
      <ul class={renderClass()}>
        <li class="link">
          <a href="#">Home</a>
        </li>
        <li class="link">
          <a href="#">About</a>
        </li>
        <li class="link">
          <a href="#">Services</a>
        </li>
        <li class="link">
          <a href="#">Contact Us</a>
        </li>
      </ul>

      <div onClick = {() => setNavLinkOpen(!NavLinkOpen)}className="hamburger-toggle">
        <i className="fas fa-bars fa-lg"></i>
      </div>
    </nav>
  );
};

export default Navbar;
