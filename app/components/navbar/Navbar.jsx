import React from "react";
import "./Navbar.css";
const Navbar = (props) => {
  return (
    <div>
      <ul className={props.nav}>
        <li>
          <a href="#home" className="link">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="link">
            About
          </a>
        </li>
        <li>
          <a href="#menue" className="link">
            Menue
          </a>
        </li>
        <li>
          <a href="#chefWord" className="link">
            Chef Word
          </a>
        </li>
        <li>
          <a href="#laurels" className="link">
            Laurels
          </a>
        </li>
        <li>
          <a href="#gallery" className="link">
            Gallery
          </a>
        </li>
        <li>
          <a href="#contact" className="link">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
