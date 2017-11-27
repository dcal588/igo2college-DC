import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props =>
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">
          IGO2COLLEGE
        </Link>
      </div>
      <ul className="nav navbar-nav navbar-right">
        <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/start"
              ? "active"
              : ""
          }
        >
          <Link to="/">Start</Link>
        </li>
        <li
          className={window.location.pathname === "/signup" ? "active" : ""}
        >
          <Link to="/signup">Sign Up</Link>
        </li>
        <li className={window.location.pathname === "/login" ? "active" : ""}>
          <Link to="/login">Log In</Link>
        </li>
      </ul>
    </div>
  </nav>;

export default Navbar;
