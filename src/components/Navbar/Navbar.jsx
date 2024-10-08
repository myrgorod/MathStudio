import React, { useState } from "react";

import "./Navbar.css";
import { FaInstagram, FaTelegram } from "react-icons/fa";

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const navHandler = () => {
    setNavToggle((prevData) => !prevData);
  };
  return (
    <nav className="navbar w-100 flex">
      <div className="container w-100">
        <div className="navbar-content flex fw-7">
          <div className="brand-and-toggler flex flex-between w-100">
            <a href="/" className="navbar-brand fs-26">
              MathStudio
            </a>
            <div
              type="button"
              className={`hamburger-menu ${
                navToggle ? "hamburger-menu-change" : ""
              }`}
              onClick={navHandler}
            >
              <div className="bar-top"></div>
              <div className="bar-middle"></div>
              <div className="bar-bottom"></div>
            </div>
          </div>
          <div
            className={`navbar-collapse ${
              navToggle ? "show-navbar-collapse" : ""
            }`}
          >
            <div className="navbar-collapse-content">
              <ul className="navbar-nav">
                <li className="text-white" onClick={navHandler}>
                  <a href="#about">Про мене</a>
                </li>
                <li className="text-white" onClick={navHandler}>
                  <a href="#services">Що ми вивчаємо</a>
                </li>
                <li className="text-white" onClick={navHandler}>
                  <a href="#rooles">Як ми навчаємось</a>
                </li>
                <li className="text-white" onClick={navHandler}>
                  <a href="#testimonials">Відгуки учнів</a>
                </li>
                <li className="text-white" onClick={navHandler}>
                  <a href="#contact">Контакти</a>
                </li>
              </ul>
              <ul className="navbar-social flex">
                <li className="text-white">
                  <a href="/" className="flex flex-center">
                    <FaInstagram />
                  </a>
                </li>
                <li className="text-white">
                  <a href="/" className="flex flex-center">
                    <FaTelegram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
