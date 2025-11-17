// src/Components/Navbar.jsx
import React, { useEffect } from "react";
import logo from "../images/Zwara-Logo.webp";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

import influencerIcon from "../images/Clip path group.webp";
import favouriteIcon from "../images/like.webp";
import cartIcon from "../images/cart-large-2-svgrepo-com.webp";
import arabicIcon from "../images/Vector.webp";

const Navbar = () => {
  const { t } = useTranslation();

  // ensure body dir is correct on first render (persisted language)
  useEffect(() => {
    document.body.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, []);

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    document.body.dir = lang === "ar" ? "rtl" : "ltr";
  };


  return (
    <nav className="navbar navbar-expand-lg navbar-light py-3 fixed-top">
      <div className="container d-flex align-items-center">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt={t("navbar.logoAlt", "Zwara logo")} />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label={t("navbar.toggle", "Toggle navigation")}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-lg-end" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto"> {/* use ms-auto for bootstrap5 RTL friendliness */}
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/influencer">
                <img src={influencerIcon} alt={t("navbar.influencer")} className="me-2" />
                {t("navbar.influencer")}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/favourite">
                <img src={favouriteIcon} alt={t("navbar.favourite")} className="me-2" />
                {t("navbar.favourite")}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/cart">
                <img src={cartIcon} alt={t("navbar.cart")} className="me-2" />
                {t("navbar.cart")}
              </NavLink>
            </li>

            {/* Language dropdown (Bootstrap) */}
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle text-white bg-transparent border-0 d-flex align-items-center"
                id="languageDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                type="button"
              >
                <img src={arabicIcon} alt={t("navbar.languageAlt")} className="me-2" style={{ width: 18 }} />
                {t(`navbar.language_${i18n.language}`)}
              </button>

              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="languageDropdown">
                <li><button className="dropdown-item" onClick={() => changeLang("en")}>{t("navbar.language_en")}</button></li>
                <li><button className="dropdown-item" onClick={() => changeLang("ar")}>{t("navbar.language_ar")}</button></li>
                <li><button className="dropdown-item" onClick={() => changeLang("hi")}>{t("navbar.language_hi")}</button></li>
                <li><button className="dropdown-item" onClick={() => changeLang("mr")}>{t("navbar.language_mr")}</button></li>
              </ul>
            </li>


            <li className="nav-item">
              <button
                type="button"
                className="btn btn-lg me-3"
                id="signIn"
                data-bs-toggle="button"
                aria-pressed="false"
                autoComplete="off"
              >
                {t("navbar.signup")}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
