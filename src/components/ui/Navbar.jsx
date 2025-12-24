import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import "../../assets/styles/Navbar.css";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

    const { t, i18n } = useTranslation();
  

  return (
    <nav className={`sideNav ${open ? "isOpen" : ""}`}>
      <div className="container">
        {/* TOP ROW (mobile’da header bo’ladi) */}
        <div className="navHeaderRow">
          <div className="logo_box">
            <h1>ASL DECOR</h1>
            {/* KEYINCHALIK BU YERDA LOGO BO'LADI */}
          </div>

          <div className="navHeaderRight">
            {/* Mobile menu button */}
            <button
              type="button"
              className="menuBtn"
              onClick={() => setOpen((p) => !p)}
              aria-label="Toggle navigation"
              aria-expanded={open}
              aria-controls="primary-nav"
            >
              <span className="menuIcon" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* LINKS */}
        <div className="nav_links" id="primary-nav">
          <ul>
            <li>
              <NavLink
                to="/"
                end
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? "navLink active" : "navLink"
                }
              >
                {t(`home`)}
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/products"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? "navLink active" : "navLink"
                }
              >
                {t(`products`)}
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/marketplaces"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? "navLink active" : "navLink"
                }
              >
                {t(`marketplaces`)}
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? "navLink active" : "navLink"
                }
              >
                {t(`about`)}
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? "navLink active" : "navLink"
                }
              >
                {t(`contact`)}
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="lang_provider">
          <select
            aria-label="Language switcher"
            id="select"
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            defaultValue="uz"
          >
            <option value="uz">🇺🇿 O'zbek</option>
            <option value="ru">🇷🇺 Русский</option>
            <option value="en">🇬🇧 English</option>
            <option value="tr">🇹🇷 Türkçe</option>
            <option value="fr">🇫🇷 Français</option>
          </select>
        </div>
      </div>

      {/* SOCIAL */}
      <div className="social_links">
        <a className="socialBtn" href="https://instagram.com/asldecor_patalok" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a className="socialBtn" href="https://t.me/AslDecor" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
          <FaTelegramPlane />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
