import React, { useState, useEffect } from "react";
import "./App.css";
import Hero from "./components/hero/Hero";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Experience from "./components/qualification/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { useInView } from "react-intersection-observer";

function App() {
  const { ref: heroRef, inView: heroView } = useInView({ threshold: 0.3 });
  const { ref: aboutRef, inView: aboutView } = useInView({ threshold: 0.3 });
  const { ref: skillsRef, inView: skillsView } = useInView({ threshold: 0.3 });
  const { ref: portfolioRef, inView: portfolioView } = useInView({
    threshold: 0.1,
  });
  const { ref: qualificationRef, inView: qualificationView } = useInView({
    threshold: 0.3,
  });
  const { ref: contactRef, inView: contactView } = useInView({
    threshold: 0.3,
  });
  const [onView, setOnView] = useState("#");

  useEffect(() => {
    if (heroView) {
      setOnView("#");
    } else if (aboutView) {
      setOnView("#about");
    } else if (skillsView) {
      setOnView("#skills");
    } else if (portfolioView) {
      setOnView("#portfolio");
    } else if (qualificationView) {
      setOnView("#experience");
    } else if (contactView) {
      setOnView("#contact");
    }
    console.log(onView);
  }, [
    onView,
    heroView,
    aboutView,
    skillsView,
    portfolioView,
    qualificationView,
    contactView,
  ]);

  return (
    <div>
      <Header />
      <Hero heroRef={heroRef} />
      <Nav onView={onView} />
      <About aboutRef={aboutRef} />
      <Skills skillsRef={skillsRef} />
      <Portfolio portfolioRef={portfolioRef} />
      <Experience qualificationRef={qualificationRef} />
      <Contact contactRef={contactRef} />
      <Footer />
    </div>
  );
}

export default App;
