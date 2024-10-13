import React from "react";
import Navbar from "../Navbar/Navbar";

import "./Header.css";

import { IoIosRocket } from "react-icons/io";

const Header = () => {
  return (
    <header className="header flex flex-center flex-column">
      <Navbar />
      <div className="container container-top">
        <div className="header-content text-center flex flex-column">
          <h1 className="text-uppercase header-title">
            math studio
            <br /> <span className="nameKate ">by Kate</span>{" "}
          </h1>
          <p className="text-lead">
            Професійний репетитор з математики.
            <br /> Я допоможу тобі підготуватись до ДПА і НМТ!
          </p>

          <a href="#contact" className="btn header-btn btn-blue">
            <IoIosRocket />
            <span>стартуймо</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
