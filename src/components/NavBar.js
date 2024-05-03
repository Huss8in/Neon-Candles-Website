import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css"; // Import the CSS file for the navbar styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faShoppingCart,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* Add logo or brand name */}
        <div className="logo">
          <NavLink to="/">Neon Candles</NavLink>
        </div>

        {/* Add search bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search for products" />
          <button type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>

      <div className="navbar-right">
        {/* Account settings */}
        <NavLink to="/account" className="nav-item">
          <FontAwesomeIcon icon={faUser} />
          <span>Account</span>
        </NavLink>

        {/* Cart */}
        <NavLink to="/cart" className="nav-item">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span>Cart</span>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
