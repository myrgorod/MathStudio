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
      <div className="container w-100 ">
        <div className="navbar-content flex fw-7">
          <div className="brand-and-toggler flex flex-between w-100">
            <a href="/" className="navbar-brand fs-26">
              Math Studio
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
                  <a href="#about">Профіль</a>
                </li>
                <li className="text-white" onClick={navHandler}>
                  <a href="#services">Послуги</a>
                </li>
                <li className="text-white" onClick={navHandler}>
                  <a href="#rooles">Вартість</a>
                </li>
                <li className="text-white" onClick={navHandler}>
                  <a href="#testimonials">Відгуки</a>
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
                  <a href="https://t.me/kate_ame" className="flex flex-center">
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
