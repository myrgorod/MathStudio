import React from "react";
import sections from "../../constants/data";
import SingleFeature from "./SingleFeature";

import "./Features.css";

const Features = () => {
  return (
    <section className="features section-p bg-black" id="rooles">
      <div className="container">
        <div className="features-content">
          <div className="item-list text-white">
            {sections.features.map((feature) => {
              return <SingleFeature key={feature.id} {...feature} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
