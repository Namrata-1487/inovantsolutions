import React from "react";
import logo from "../images/Zwara-Logo.webp";
import { NavLink } from "react-router-dom";

import influencerIcon from "../images/Clip path group.webp";
import favouriteIcon from "../images/like.webp";
import cartIcon from "../images/cart-large-2-svgrepo-com.webp";
import arabicIcon from "../images/Vector.webp";


const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light py-3 fixed-top " >

        <div className="container d-flex align-items-center">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="LOGO" />
          </NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-lg-end" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink className="nav-link text-white" to="./influencer"><img
                  src={influencerIcon} alt="Influencer" className="me-3" />Influencer</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/"><img
                  src={favouriteIcon} alt="Favourite" className="me-3" />Favourite</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/"><img
                  src={cartIcon} alt="Cart" className="me-3" />Cart</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/"><img
                  src={arabicIcon} alt="العربية" className="me-3" />العربية</NavLink>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-lg me-3 " id="signIn"
                  data-bs-toggle="button"
                  aria-pressed="false"
                  autoComplete="off"
                >
                  Sign up/Log in</button>
              </li>
            </ul>
          </div>
        </div>

      </nav>
    </>
  );
};

export default Navbar;
