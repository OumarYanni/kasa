import logo from "../assets/LOGO.png";
import "../style/Header.css";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className="navbar">
        <div className="kasa">
          <img className="logo" src={logo} alt="logo"></img>
        </div>

        <ul className="links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "activeLink" : undefined
              }
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/apropos"
              className={({ isActive }) =>
                isActive ? "activeLink" : undefined
              }
            >
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
