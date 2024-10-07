import React from "react";
import sections from "../../constants/data";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio section-p bg-dark" id="portfolio">
      <div className="container">
        <div className="portfolio-content">
          <div className="section-t text-center">
            <h3>Мої методи роботи</h3>
            <p className="text">
              Математика – це "маст-хев" у сучасному світі. Багато хто розуміє
              це, але не знає, як опанувати цей важливий інструмент. Я розробила
              унікальну методику викладання, яку успішно застосовую в своїй
              роботі.
            </p>
          </div>
          <div className="item-list text-center text-white grid">
            {sections.portfolio.map((portfolio) => {
              return (
                <div
                  className="item flex flex-center flex-column translate-effect"
                  key={portfolio.id}
                  style={{
                    backgroundImage: `url(${portfolio.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="item-title fs-25 fw-6">{portfolio.title}</div>
                  <div className="text text-white">{portfolio.text}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
