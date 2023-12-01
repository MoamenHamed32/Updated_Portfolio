import "./App.css";
import About from "./Components/about/About";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import Hero from "./Components/hero/Hero";
import Portfolio from "./Components/portfolio/Portfolio";
import Skills from "./Components/skills/Skills";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
