import "./App.css";
import "./assets/js/script";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Portfolio from "./components/Portfolio/Portfolio";
import Qualities from "./components/Qualities/Qualities";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <div>
      <Header />
      <Services />
      <About />
      <Qualities />
      <Features />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
