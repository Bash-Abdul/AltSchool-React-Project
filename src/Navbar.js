import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink to="/custom" activeClassName="active" className="nav-link">
            Custom counter
          </NavLink>
        </li>
        <li>
          <NavLink to="/reducer" activeClassName="active" className="nav-link">
            UseReducer counter
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/404"
            activeClassName="active"
            className="nav-link"
          >
            404 Page
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
