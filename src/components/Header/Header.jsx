import React from "react";
import Navbar from "../Navbar/Navbar";

import "./Header.css";

import { FaPaperPlane } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header flex flex-center flex-column">
      <Navbar />
      <div className="container">
        <div className="header-content text-center flex flex-column">
          <h1 className="text-uppercase header-title">
            math studio
            <br /> <span className="nameKate ">by Kate</span>{" "}
          </h1>
          <p className="text-lead">
            Кожен урок – це поєднання мого досвіду та потреб учнів.
            <br /> Я допоможу тобі розібратись та впевнено рухатись вперед!
          </p>

          <a href="#contact" className="btn header-btn btn-blue">
            <FaPaperPlane />
            <span>get started</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
