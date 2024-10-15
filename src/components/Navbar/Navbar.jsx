import React, { useContext, useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.png";
import Search from "../../assets/search_icon.png";
import Basket from "../../assets/basket_icon.png";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");

  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <img src={Logo} alt="seen" className="logo" />
        </Link>
        <ul className="navbar-menu">
          <Link
            to="/"
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            Home
          </Link>
          <a
            href="#explore-menu"
            onClick={() => setMenu("menu")}
            className={menu === "menu" ? "active" : ""}
          >
            Menu
          </a>
          <a
            href="#app-download"
            onClick={() => setMenu("mobile-app")}
            className={menu === "mobile-app" ? "active" : ""}
          >
            Mobile App
          </a>
          <a
            href="#footer"
            onClick={() => setMenu("contact-us")}
            className={menu === "contact-us" ? "active" : ""}
          >
            Contact Us
          </a>
        </ul>
        <div className="navbar-right">
          <img className="search" src={Search} alt="seen" />
          <div className="navbar-search-icon">
            <Link to="/cart">
              <img src={Basket} alt="seen" />
            </Link>
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
          </div>
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
