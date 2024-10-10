import React from "react";
import sections from "../../constants/data";
import "./Qualities.css";
import images from "../../constants/images";

const Qualities = () => {
  return (
    <section className="qualities section-p bg-md-black" id="qualities">
      <div className="container">
        <div className="qualities-content grid">
          <div className="content-left">
            <div className="section-t">
              <h4>Професіонал</h4>
              <p className="text">
                Математика – це основа розвитку людської цивілізації. Від
                найдавніших часів люди використовували числа для вимірювання,
                обчислення та організації простору. Вона стала ключем до
                розуміння світу, допомагаючи у будівництві пірамід, розвитку
                торгівлі та навігації.{" "}
              </p>{" "}
              <p className="text">
                {" "}
                Математика розвиває логічне мислення, здатність до аналізу й
                вирішення складних задач. Вона й сьогодні є фундаментом науки,
                технологій та інженерії, забезпечуючи прогрес людства в усіх
                сферах життя.
              </p>
            </div>
            <div className="item-list grid text-white">
              {sections.qualities.map((quality) => {
                return (
                  <div className="item flex" key={quality.id}>
                    <div className="item-icon flex flex-center">
                      {quality.icon}
                    </div>
                    <div className="item-text">
                      <h4 className="item-title fs-25">{quality.title}</h4>
                      <p className="text">{quality.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="content-right">
            <img src={images.portfolio_img_7} alt="" title="репетитор з математики"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualities;
