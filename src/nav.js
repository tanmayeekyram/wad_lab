import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <div className="nav d-flex justify-content-between">
      <h2 className="mx-5 text-light">Tanmayee</h2>
      <ul className="d-flex justify-content-end">
        <li className="nav-item">
          <Link className="nav-link " to="">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="signin">
            Signin
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="register">
            Register
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="catalogue">
            catalogue
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="kart">
            Kart
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="contact">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="about">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
