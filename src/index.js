import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Qualities from "./components/Qualities/Qualities";
import Features from "./components/Features/Features";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="qualities" element={<Qualities />} />
        <Route path="features" element={<Features />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
