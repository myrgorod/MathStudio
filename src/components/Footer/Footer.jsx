import React from "react";
import "./Footer.css";

const Footer = () => {
  let date = new Date();
  return (
    <div>
      <footer className="footer bg-black flex flex-center">
        <div className="container flex flex-center w-100">
          <div className="grid footer-content text-center">
            <div className="text text-start">
              Якщо ви хочете навчитися плавати, то сміливо ідіть у воду,
              <br /> а якщо хочете навчитися розв’язувати задачі, то розв’язуйте
              їх.
              <br />
              <div className="text text-end"> Д. Пойя</div>
            </div>
            <div className="text text-end">
              &copy; {date.getFullYear().toString()} Math Studio.Theme
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
