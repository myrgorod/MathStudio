import React from "react";
import "./Footer.css";

const Footer = () => {
  let date = new Date();
  return (
    <div>
      <footer className="footer bg-black flex flex-center">
        <div className="container flex flex-center w-100">
          <div className="grid footer-content text-center">
            <p className="text">
              Якщо ви хочете навчитися плавати, то сміливо ідіть у воду,
              <br /> а якщо хочете навчитися розв’язувати задачі, то розв’язуйте
              їх.
              <br /> ( Д. Пойя)
            </p>
            <span className="text">
              &copy; {date.getFullYear().toString()} MathStudio.Theme
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
