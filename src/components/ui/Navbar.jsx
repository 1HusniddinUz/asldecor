import React from "react";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import "../../assets/styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="sideNav">
      <div className="container">
        <div className="logo_box">
          <h1>ASL DECOR</h1>
          {/* KEYINCHALIK BU YERDA LOGO BO'LADI */}
        </div>

        <div className="nav_links">
          <ul>
            {/* A LARNI NAVLINKSGA O'ZGARTIR */}
            <li>
              <NavLink to="/" end className={({ isActive }) => (isActive ? "navLink active" : "navLink")}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/products" className={({ isActive }) => (isActive ? "navLink active" : "navLink")}>
                Products
              </NavLink>
            </li>

            <li>
              <NavLink to="/marketplaces" className={({ isActive }) => (isActive ? "navLink active" : "navLink")}>
                Marketplaces
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? "navLink active" : "navLink")}>
                About
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? "navLink active" : "navLink")}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="lang_provider">
          <select aria-label="Language switcher" defaultValue="uz">
            <option value="uz">uz</option>
            <option value="ru">ru</option>
            <option value="en">en</option>
            <option value="fr">fr</option>
            <option value="tr">tr</option>
          </select>
        </div>
      </div>

      <div className="social_links">
        {/* BU YERDA INSTAGRAM VA TELEGRAM ICONLAR BO'LADI */}
        <a className="socialBtn" href="#" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a className="socialBtn" href="#" aria-label="Telegram">
          <FaTelegramPlane />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
