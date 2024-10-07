import React from "react";
import "./Contact.css";

const Map = () => {
  return (
    <div className="map-content">
      {/* eslint-disable-next-line */}

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d325516.56922881043!2d30.20305860879027!3d50.40200751777504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1suk!2sua!4v1728159310358!5m2!1suk!2sua"
        title="MathStudio"
        width="100%"
        height="450"
        style={{ border: 0 }}
      ></iframe>
    </div>
  );
};

export default Map;
