import React, { useContext, useState } from "react";
import "./Navbar.css";
import login_icon from "../Assets/circle-user-regular.png";
import cart_icon from "../Assets/bag-shopping-solid.png";
import gift_icon from "../Assets/gift-solid.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import menu_icon from "../Assets/bars-solid.png";

const NavBar = () => {
  const { getTotalCartItems } = useContext(ShopContext);
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    setMobileMenu((prevState) => !prevState);
  };

  const handleMenuClick = () => {
    setMobileMenu(false);
  };

  return (
    <div className="nav-bar">
      <div className="nav-list">
        <img
          className="menu-icon"
          src={menu_icon}
          alt=""
          onClick={toggleMenu}
        />
        <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
          <li>
            <Link
              to="/"
              onClick={handleMenuClick}
              style={{ textDecoration: "none", color: "rgb(94,94,74)" }}
            >
              shop
            </Link>
          </li>
          <li>
            <Link
              to="/category"
              onClick={handleMenuClick}
              style={{ textDecoration: "none", color: "rgb(94,94,74)" }}
            >
              category
            </Link>
          </li>
          <li>
            <Link
              to="/our-story"
              onClick={handleMenuClick}
              style={{ textDecoration: "none", color: "rgb(94,94,74)" }}
            >
              our story
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              onClick={handleMenuClick}
              style={{ textDecoration: "none", color: "rgb(94,94,74)" }}
            >
              blog
            </Link>
          </li>
          <li>
            <Link
              to="/sale"
              onClick={handleMenuClick}
              style={{ textDecoration: "none", color: "rgb(94,94,74)" }}
            >
              sale
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={handleMenuClick}
              style={{ textDecoration: "none", color: "rgb(94,94,74)" }}
            >
              contact
            </Link>
          </li>
        </ul>
      </div>
      <Link to="/">
        <div className="nav-logo">H-CANDLES</div>
      </Link>
      <div className="nav-login-cart">
        <Link
          to="/login"
          style={{ textDecoration: "none", color: "rgb(94,94,74)" }}
        >
          <div className="login">
            <img src={login_icon} alt="" />
            <p>Login</p>
          </div>
        </Link>
        <div className="gift">
          <Link to="/gift">
            {" "}
            <img src={gift_icon} alt="" />{" "}
          </Link>
        </div>
        <div className="cart">
          <Link to="/cart">
            <img src={cart_icon} alt="" />
          </Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
