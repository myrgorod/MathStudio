import React from "react";
import sections from "../../constants/data";
import { MdStar } from "react-icons/md";

import "./Testimonials.css";

const gradient = "url(#blue-gradient)";

const Testimonials = () => {
  let startList;
  const showRating = (starCount) => {
    startList = new Array(starCount);
    for (let i = 0; i < startList.length; i++) {
      startList[i] = <MdStar size={25} style={{ fill: gradient }} />;
    }
    return startList;
  };
  return (
    <section className="testimonials section-p bg-black" id="testimonials">
      <div className="container">
        <div className="testimonials-content">
          <div className="section-t text-center">
            <h4>Відгуки учнів</h4>
            <p className="text">
              Як вчитель, я завжди щиро радію успіхам своїх учнів і хочу
              поділитися відгуками про нашу спільну роботу. У процесі навчання
              ми долаємо труднощі, відкриваємо нові горизонти та досягаємо
              значних результатів. Мене надихають їхні досягнення, і я щаслива
              бути частиною цього шляху до знань і особистісного зростання!
            </p>
          </div>
          <div className="item-list grid text-white text-center">
            {sections.testimonials.map((testimonial) => {
              showRating(testimonial.rating);
              return (
                <div
                  className="item translate-effect bg-dark"
                  key={testimonial.id}
                >
                  <h4 className="item-name">{testimonial.name}</h4>
                  <p className="item-text text">{testimonial.text}</p>
                  <ul className="flex item-rating flex-center">
                    {startList.map((star, index) => {
                      return <li key={index}>{star}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
